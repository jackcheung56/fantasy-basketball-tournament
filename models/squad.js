'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Squad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Squad.init({
    rosterId: {
      type: DataTypes.INTEGER,
      field: 'roster_id',
      references: {
        model: 'rosters',
        key: 'id'
      }
    },
    playerId: {
      type: DataTypes.INTEGER,
      field: 'player_id',
      references: {
        model: 'players',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Squad',
    tableName: 'squads'
  });
  return Squad;
};