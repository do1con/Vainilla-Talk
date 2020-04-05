const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const Sequelize = require("sequelize");
const db = require("../models");

const router = express.Router();

const { Op } = Sequelize;

router.get("/", async (req, res, next) => {
  // 유저 정보 로드
  try {
    if (!req.user) {
      return res.status(401).send("로그인을 하지 않았습니다.");
    }
    const user = await db.User.findOne({
      where: { id: req.user.id },
      include: [
        {
          model: db.UserChatSession,
        },
        {
          model: db.User,
          as: "Friend",
          attributes: ["id"],
        },
        {
          model: db.User,
          as: "AskFriend",
          attributes: ["id"],
        },
      ],
      attributes: ["id", "nickname", "userId"],
    });
    return res.json(user);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/", async (req, res, next) => {
  // 회원가입
  try {
    const exUser = await db.User.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디 입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.userPassword, 11); // salt
    const newUser = await db.User.create({
      nickname: req.body.userNickname,
      userId: req.body.userId,
      password: hashedPassword,
    });
    console.log(newUser);
    return res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/login", (req, res, next) => {
  // 로그인
  try {
    passport.authenticate("local", (error, user, info) => {
      console.log(error, user, info);
      if (error) {
        console.error(error);
        return next(error);
      }
      if (info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, async (loginError) => {
        if (loginError) {
          return next(loginError);
        }
        const fullUser = await db.User.findOne({
          where: { id: user.id },
          include: [
            {
              model: db.UserChatSession,
            },
            {
              model: db.User,
              as: "Friend",
              attributes: ["id", "userId", "nickname"],
            },
            {
              model: db.User,
              as: "AskFriend",
              attributes: ["id", "userId", "nickname"],
            },
          ],
          attributes: ["id", "nickname", "userId"],
        });
        console.log(fullUser);
        return res.json(fullUser);
      });
    })(req, res, next);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/Logout", (req, res) => {
  // 로그아웃
  req.logout();
  req.session.destroy();
  res.send("logout 성공");
});

router.post("/:id/edit", (req, res) => {
  // 회원정보 수정
  // /api/user/:id/follow
});

router.post("/searchFriend", async (req, res, next) => {
  // 친구 찾기 (친구 검색)
  try {
    console.log("친구찾기 요청이 왔습니다.");
    console.log(req.body);
    if (req.body.value === "") {
      // 검색어 없이 요청했을 경우 : 랜덤 레코드 10개
      const foundRandomUsers = await db.User.findAll({
        order: Sequelize.literal("rand()"),
        limit: 10,
        attributes: ["userId", "nickname"],
        where: {
          [Op.not]: [
            {
              userId: req.body.reqUser,
            },
          ],
        },
      });
      console.log(foundRandomUsers);
      return res.status(200).json(foundRandomUsers);
    }
    if (req.body.where === "userId") {
      // id로 검색 했을 때.
      const foundUser = await db.User.findOne({
        where: {
          userId: req.body.value,
        },
        [Op.not]: [
          {
            userId: req.body.reqUser,
          },
        ],
        attributes: ["userId", "nickname"],
      });
      console.log(foundUser);
      return res.status(200).json(foundUser);
    }
    if (req.body.where === "userNickname") {
      // 닉네임으로 검색 했을 때.
      const foundUser = await db.User.findAll({
        where: {
          nickname: req.body.value,
        },
        [Op.not]: [
          {
            userId: req.body.reqUser,
          },
        ],
        attributes: ["userId", "nickname"],
      });
      console.log(foundUser);
      return res.status(200).json(foundUser);
    }
    return res.status(401).send("정상적인 요청이 아닙니다.");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/:userId/addFriend/:friendId", async (req, res, next) => {
  // 친구 추가 요청, 첫번째가 요청자, 두번째가 요청받은사람
  try {
    const result = await db.User.findOne({
      where: {
        userId: req.params.friendId,
      },
    });
    return await result.addAskFriend(req.params.userId);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/acceptFriend", async (req, res, next) => {
  // 친구 승락
  try {
    console.log("친구승락 요청이 왔습니다.");
    const result = await db.User.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    await result.removeAskFriend(req.body.friendId);
    return await result.addFriend(req.body.friendId);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.patch("/editProfile", async (req, res, next) => {
  // 프로필 수정
  try {
    console.log("프로필 수정 요청이 왔습니다.");
    console.log(req.body);
    if (req.body.nickname === null && req.body.changePassword === true) {
      // 비밀번호만 바꾸는 경우
      const hashedPassword = await bcrypt.hash(req.body.userPassword, 11); // salt
      const user = await db.User.update(
        {
          password: hashedPassword,
        },
        {
          where: {
            userId: req.body.userId,
          },
        }
      );
      return res.send(user);
    }
    if (
      req.body.nickname !== null &&
      (req.body.changePassword === false || req.body.changePassword === null)
    ) {
      // 닉네임만 바꾸는 경우
      const user = await db.User.update(
        {
          nickname: req.body.nickname,
        },
        {
          where: {
            userId: req.body.userId,
          },
        }
      );
      return res.send(user);
    }
    if (req.body.nickname !== null && req.body.changePassword === true) {
      // 둘다 바꾸는 경우
      const hashedPassword = await bcrypt.hash(req.body.userPassword, 11); // salt
      const user = await db.User.update(
        {
          password: hashedPassword,
          nickname: req.body.nickname,
        },
        {
          where: {
            userId: req.body.userId,
          },
        }
      );
      return res.send(user);
    }
    return res.status(401).send("정상적인 요청이 아닙니다.");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.delete("/:id/addFriend/:id", (req, res) => {
  // 친구 삭제
  // /api/user/:id/follow
});

module.exports = router;
