'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.belongsToMany(models.Roster, {
        through: models.Squad,
        foreignKey: "roster_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      })
    }
  };
  Player.init({
    rosterId: {
      type: DataTypes.INTEGER,
      field: 'roster_id',
      references: {
        model: 'rosters',
        key: 'id'
      }
    },
    playerPicture: DataTypes.STRING,
    team: DataTypes.STRING,
    position: DataTypes.STRING,
    fieldGoal: DataTypes.INTEGER,
    freeThrow: DataTypes.INTEGER,
    threesMade: DataTypes.INTEGER,
    rebounds: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    steals: DataTypes.INTEGER,
    blocks: DataTypes.INTEGER,
    turnovers: DataTypes.INTEGER,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player',
    tableName: 'players'
  });
  return Player;
};