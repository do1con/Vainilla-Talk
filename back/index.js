const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("서버 작동!");
});

app.get("/about", (req, res) => {
  res.send("hello about!");
});

app.listen(4851, () => {
  console.log("server is running on http://localhost:4851");
});
