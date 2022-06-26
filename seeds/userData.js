const { User } = require("../models");

const userdata = [
  {
    username: "AA",
    email: "AA@gmail.com",
    password: "password",
  },
  {
    username: "BB",
    email: "BB@gmail.com",
    password: "password",
  },
  {
    username: "CC",
    email: "CC@gmail.com",
    password: "password",
  },
  {
    username: "DD",
    email: "DD@gmail.com",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
