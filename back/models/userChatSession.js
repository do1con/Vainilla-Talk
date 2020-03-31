module.exports = (sequelize, DataTypes) => {
  const UserChatSession = sequelize.define(
    "UserChatSession",
    {
      sessionId: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
      },
      roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  UserChatSession.associate = (db) => {
    db.UserChatSession.belongsToMany(db.User, {
      foreingKey: "userId",
      targetKey: "userId",
      through: "UserChatList",
      as: "UserChatJoined",
    });
    db.UserChatSession.belongsTo(db.ChatRoom, {
      foreingKey: "roomId",
      targetKey: "roomId",
    });
  };
  return UserChatSession;
};
