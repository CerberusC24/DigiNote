const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newSong,
  getAllSongs,
  deleteUserSong
} = require("../../controllers/song")

router
  .route("/")
  .get(withAuth, getAllSongs);
router
  .route("/")
  .post(withAuth, newSong);
router.route("/delete/:id")
  .delete(withAuth, deleteUserSong);

module.exports = router;