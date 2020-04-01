module.exports = (sequelize, DataTypes) => {
  const UserChatSession = sequelize.define(
    "UserChatSession",
    {
      sessionId: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  UserChatSession.associate = (db) => {
    db.UserChatSession.belongsTo(db.User, {
      foreingKey: "userId",
    });
    db.UserChatSession.belongsTo(db.ChatRoom, {
      foreingKey: "roomId",
    });
  };
  return UserChatSession;
};
