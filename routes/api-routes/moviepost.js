const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  getAllMoviePost,
  getAllPostMovie,
  newMoviePost
} = require("../../controllers/moviepost")

router
  .route("/")
  .post(withAuth, newMoviePost);
router
  .route("/post/:postid")
  .get(withAuth, getAllMoviePost);
router
  .route("/movie/:movieid")
  .get(withAuth, getAllPostMovie);

module.exports = router;