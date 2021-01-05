'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rosterId: {
        type: Sequelize.INTEGER
      },
      playerPicture: {
        type: Sequelize.STRING
      },
      team: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      fieldGoal: {
        type: Sequelize.INTEGER
      },
      freeThrow: {
        type: Sequelize.INTEGER
      },
      threesMade: {
        type: Sequelize.INTEGER
      },
      rebounds: {
        type: Sequelize.INTEGER
      },
      assists: {
        type: Sequelize.INTEGER
      },
      steals: {
        type: Sequelize.INTEGER
      },
      blocks: {
        type: Sequelize.INTEGER
      },
      turnovers: {
        type: Sequelize.INTEGER
      },
      points: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('players');
  }
};