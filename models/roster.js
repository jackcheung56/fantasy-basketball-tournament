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
      Roster.hasMany(models.Player, {
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
    playerId: DataTypes.INTEGER,
    profileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Roster',
    tableName: 'rosters'
  });
  return Roster;
};