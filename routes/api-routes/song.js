const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {newSong, getAllSongs} = require("../../controllers/song")

router 
  .route("/")
  .get(withAuth, getAllSongs);

router 
  .route("/")
  .post(withAuth, newSong);

  module.exports = router;