const sequelize = require("../config/connection");
const seedPicture = require("./pictureData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPicture();

  process.exit(0);
};

seedAll();
