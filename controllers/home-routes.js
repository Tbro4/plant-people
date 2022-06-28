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
          attributes: ["id", "filename"],
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

//load upload page
router.get("/upload", async (req, res) => {
  try {
    res.render("upload");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// load upload page

//upload image
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname + "../../public/uploadImages"));
  },
  //file is the actual file
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
//upload.single(name of the input where you grab the file)
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const pictureData = await Picture.create({
      filename: req.file.filename,
      user_id: req.params.id,
    });
    res.status(200).json(pictureData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
