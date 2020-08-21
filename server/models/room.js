'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.belongsTo(models.RoomType)
    }
  };
  Room.init({
    room_num: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false
    },
    floor: DataTypes.DECIMAL,
    good_view: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};