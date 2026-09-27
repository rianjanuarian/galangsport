'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('progresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_order: {
        type: Sequelize.INTEGER
      },
      desain: {
        type: Sequelize.DATE
      },
      setting: {
        type: Sequelize.DATE
      },
      print: {
        type: Sequelize.DATE
      },
      press: {
        type: Sequelize.DATE
      },
      potong: {
        type: Sequelize.DATE
      },
      qc_potong: {
        type: Sequelize.DATE
      },
      jahit: {
        type: Sequelize.DATE
      },
      qc_finish: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('progresses');
  }
};