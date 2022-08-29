const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favourites extends Model {}

Favourites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price : {
      type: DataTypes.String,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favourites',
  }
)