"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {
        through: models.Comment,
        foreignKey: "tea_id",
        otherKey: "user_id",
      });
    }
  }
  Tea.init(
    {
      name: DataTypes.STRING,
      picture_url: DataTypes.TEXT,
      info: DataTypes.TEXT,
      placeOfBirth: DataTypes.STRING,
      coordinates: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tea",
    }
  );
  return Tea;
};
