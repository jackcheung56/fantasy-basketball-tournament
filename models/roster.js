'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roster.belongsToMany(models.Player, {
        through: models.Squad,
        foreignKey: "player_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      })

      Roster.belongsTo(models.Profile, {
        foreignKey: "profile_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      })
    }
  };
  Roster.init({
    playerId: {
      type: DataTypes.INTEGER,
      field: 'player_id',
      references: {
        model: 'players',
        key: 'id'
      }
    },
    profileId: {
      type: DataTypes.INTEGER,
      field: 'profile_id',
      references: {
        model: 'profiles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Roster',
    tableName: 'rosters'
  });
  return Roster;
};