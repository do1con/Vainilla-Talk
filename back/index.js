const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const dotenv = require("dotenv");
const passport = require("passport");
const db = require("./models");
const userAPIRouter = require("./routes/user");
const passportConfig = require("./passport");

const app = express();
db.sequelize.sync();
dotenv.config();
passportConfig();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false, // https쓸 떄 true로( 서버에 올라갔을 때 )
    },
    name: "pageHistory",
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userAPIRouter);

app.listen(4851, () => {
  console.log("server is running on http://localhost:4851");
});
