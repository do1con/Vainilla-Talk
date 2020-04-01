const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const db = require("../models");

const router = express.Router();

router.get("/", (req, res, next) => {
  // 유저 정보 로드
  try {
    if (!req.user) {
      return res.status(401).send("로그인을 하지 않았습니다.");
    }
    return res.json(req.user);
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
              attributes: ["id"],
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

router.post("/:id/addFriend/:id", (req, res) => {
  // 친구 추가
  // /api/user/:id/follow
});

router.delete("/:id/addFriend/:id", (req, res) => {
  // 친구 삭제
  // /api/user/:id/follow
});

module.exports = router;
