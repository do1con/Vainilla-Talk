const express = require("express");
const db = require("./models");

const userAPIRouter = require("./routes/user");

const app = express();
db.sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userAPIRouter);

app.listen(4851, () => {
  console.log("server is running on http://localhost:4851");
});
