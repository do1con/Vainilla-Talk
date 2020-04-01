const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const db = require("../models");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "userId", // 요것들은 프론트에서 보내는거, (req.body)
        passwordField: "password",
      },
      async (userId, password, done) => {
        // id, password 받고 로그인전략 여기
        try {
          const user = await db.User.findOne({
            where: {
              userId,
            },
          });
          if (!user) {
            return done(null, false, { reason: "존재하지 않는 사용자입니다." });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 틀립니다." });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      }
    )
  );
};
