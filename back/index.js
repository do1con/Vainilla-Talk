const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./models");
const userAPIRouter = require("./routes/user");

const app = express();
db.sequelize.sync();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userAPIRouter);

app.listen(4851, () => {
  console.log("server is running on http://localhost:4851");
});
