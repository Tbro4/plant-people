const User = require("./User");
const Picture = require("./Picture");

User.hasMany(Picture, {
  foreignKey: "user_id",
});

Picture.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Picture };
