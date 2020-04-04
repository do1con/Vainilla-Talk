module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  User.associate = (db) => {
    db.User.hasMany(db.UserChatSession, {
      foreingKey: "userId",
    });
    db.User.hasMany(db.Message, {
      foreingKey: "userId",
    });
    db.User.belongsToMany(db.User, { through: "Friends", as: "Friend", foreingKey: "ownerId" });
    db.User.belongsToMany(db.User, {
      through: "AskFriends",
      as: "AskFriend",
      foreingKey: "friendId",
    });
  };
  return User;
};
