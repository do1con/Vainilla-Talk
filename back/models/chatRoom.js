module.exports = (sequelize, DataTypes) => {
  const ChatRoom = sequelize.define("ChatRoom", {
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
  });

  ChatRoom.associate = (db) => {
    db.ChatRoom.hasMany(db.UserChatSession, {
      foreingKey: "roomId",
      sourceKey: "roomId",
      as: "SessionHasUser",
    });
    db.ChatRoom.hasMany(db.Message, {
      foreingKey: "roomId",
      sourceKey: "roomId",
      as: "ChatRoomHasMessage",
    });
  };
  return ChatRoom;
};
