const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const db = {};

// @ts-ignore
// eslint-disable-next-line prettier/prettier
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require("./user")(sequelize, Sequelize);
db.UserChatSession = require("./userChatSession")(sequelize, Sequelize);
db.ChatRoom = require("./chatRoom")(sequelize, Sequelize);
db.Message = require("./message")(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
