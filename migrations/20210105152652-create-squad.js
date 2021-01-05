'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('squads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rosterId: {
        type: Sequelize.INTEGER,
        field: 'roster_id',
        references: {
          model: 'rosters',
          key: 'id'
        }
      },
      playerId: {
        type: Sequelize.INTEGER,
        field: 'player_id',
        references: {
          model: 'players',
          key: 'id'
        }
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
    await queryInterface.dropTable('squads');
  }
};