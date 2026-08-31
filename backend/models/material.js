'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  material.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    unit: DataTypes.STRING,
    early_stock: DataTypes.INTEGER,
    total_in: DataTypes.INTEGER,
    total_out: DataTypes.INTEGER,
    late_stock: DataTypes.INTEGER,
    status: DataTypes.STRING,
    entry_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'material',
  });
  return material;
};