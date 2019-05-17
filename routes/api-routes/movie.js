const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newMovie,
  getAllMovies,
  deleteUserMovie
} = require("../../controllers/movie")

router
  .route("/")
  .get(withAuth, getAllMovies);
router
  .route("/")
  .post(withAuth, newMovie);
router
  .route("/delete/:id")
  .delete(withAuth, deleteUserMovie);

module.exports = router;