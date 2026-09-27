'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  progress.init({
    id_order: DataTypes.INTEGER,
    desain: DataTypes.DATE,
    setting: DataTypes.DATE,
    print: DataTypes.DATE,
    press: DataTypes.DATE,
    potong: DataTypes.DATE,
    qc_potong: DataTypes.DATE,
    jahit: DataTypes.DATE,
    qc_finish: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'progress',
  });
  return progress;
};