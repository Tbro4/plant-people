const router = require("express").Router();
const { User } = require("../models");

//load homepage with login/signup buttons
router.get("/", async (req, res) => {
  try {
    res.render("welcome");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
