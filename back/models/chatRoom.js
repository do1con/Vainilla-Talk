module.exports = (sequelize, DataTypes) => {
  const ChatRoom = sequelize.define("ChatRoom", {
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  ChatRoom.associate = (db) => {
    db.ChatRoom.hasMany(db.UserChatSession, {
      foreingKey: "roomId",
    });
    db.ChatRoom.hasMany(db.Message, {
      foreingKey: "roomId",
    });
  };
  return ChatRoom;
};
