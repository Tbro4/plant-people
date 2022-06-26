const { Picture } = require("../models");

const picturedata = [
  {
    title: "Title1",
    description: "A fitting description for this picture",
    filename: "alina-kompa-VDL3vLfLgvk-unsplash.jpg",
    user_id: 1,
  },
  {
    title: "Title2",
    description: "A fitting description for this picture",
    filename: "annie-spratt-8mqOw4DBBSg-unsplash.jpg",
    user_id: 1,
  },
  {
    title: "Title3",
    description: "A fitting description for this picture",
    filename: "annie-spratt-gSQbip5HHuc-unsplash.jpg",
    user_id: 2,
  },
  {
    title: "Title4",
    description: "A fitting description for this picture",
    filename: "beatriz-moraes-QnDPl6pxSWE-unsplash.jpg",
    user_id: 2,
  },
  {
    title: "Title5",
    description: "A fitting description for this picture",
    filename: "chris-lee-70l1tDAI6rM-unsplash.jpg",
    user_id: 3,
  },
  {
    title: "Title6",
    description: "A fitting description for this picture",
    filename: "cleo-stracuzza-avA-YuEe2ZA-unsplash.jpg",
    user_id: 3,
  },
  {
    title: "Title7",
    description: "A fitting description for this picture",
    filename: "deepak-nautiyal-z0oLtTg3eGU-unsplash.jpg",
    user_id: 4,
  },
  {
    title: "Title8",
    description: "A fitting description for this picture",
    filename: "emma-valerio-F2lYI9SP6TE-unsplash.jpg",
    user_id: 4,
  },
];

const seedPicture = () => Picture.bulkCreate(picturedata);

module.exports = seedPicture;
