const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  getAllVideoPost,
  getAllPostVideo,
  newVideoPost
} = require("../../controllers/videopost")

router
  .route("/")
  .post(withAuth, newVideoPost);
router
  .route("/post/:postid")
  .get(withAuth, getAllVideoPost);
router
  .route("/video/:videoid")
  .get(withAuth, getAllPostVideo);

module.exports = router;