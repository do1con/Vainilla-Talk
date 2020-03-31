const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const db = require("../models");

const router = express.Router();
router.post("/:chatId/:message", (req, res) => {
  // 채팅 메시지
});
module.exports = router;
