module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "Message",
    {
      messageId: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      message: {
        type: DataTypes.TEXT,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  Message.associate = (db) => {
    db.Message.belongsTo(db.User, {
      foreingKey: "userId",
    });
    db.Message.belongsTo(db.ChatRoom, {
      foreingKey: "roomId",
    });
  };
  return Message;
};
