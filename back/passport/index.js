const passport = require("passport");
const db = require("../models");
const local = require("./local");

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({
        where: { id },
      });
      return done(null, user);
    } catch (error) {
      console.error(error);
      return done(error);
    }
  });

  local();
};

/* 
프론트에서 서버로는 cookie만 보냄
서버가 쿠키파서, 익스프레스 세션으로 쿠키검사해서 id를 찾아냄
id로 deserializeUser실행
req.user로 사용자 정보가 들어감
프론트에서 요청 보낼때마다 deserializeUser가 실행 됨
*/
