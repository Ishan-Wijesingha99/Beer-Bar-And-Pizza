const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pizza extends Model {}

Pizza.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pizza_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pizza_description: {
      type: DataTypes.STRING,
    },
    price : {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pizza',
  }
)

module.exports = Pizza