'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoomType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RoomType.init({
    name : {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    max_occupancy: DataTypes.DECIMAL,
    rate: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'RoomType',
  });
  return RoomType;
};