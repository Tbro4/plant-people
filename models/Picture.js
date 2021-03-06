const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Picture extends Model {}

Picture.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      // defaultValue: "TITLE",
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      // defaultValue: "DESCRIPTION",
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      // },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "picture",
  }
);

module.exports = Picture;
