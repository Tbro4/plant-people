const router = require("express").Router();
const { User, Picture } = require("../models");

//load homepage with login/signup buttons
router.get("/", async (req, res) => {
  try {
    res.render("welcome");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//load login page
router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//load signup page
router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//load members page

router.get("/members", async (req, res) => {
  const userData = await User.findAll().catch((err) => {
    res.json(err);
  });
  const users = userData.map((user) => user.get({ plain: true }));
  res.render("members", { users });
});

//load one member

router.get("/members/:id", async (req, res) => {
  try {
    const dbMemberData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Picture,
          attributes: ["id", "title", "description", "filename", "user_id"],
        },
      ],
    });
    const member = dbMemberData.get({ plain: true });
    res.render("member", { member });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
