'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.hasOne(models.User, {
        foreignKey: "user_id",
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      })
    }
  };
  Profile.init({
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'profiles'
  });
  return Profile;
};