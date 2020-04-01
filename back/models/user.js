module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
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
      sourceKey: "userId",
      as: "UserHasSession",
    });
    db.User.belongsToMany(db.User, { through: "Friends", as: "Friend" });
  };
  return User;
};
