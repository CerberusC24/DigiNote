const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newVideo,
  getAllVideos,
  deleteUserVid
} = require("../../controllers/video")

router
  .route("/")
  .get(withAuth, getAllVideos);
router
  .route("/")
  .post(withAuth, newVideo);
router
  .route("/delete/:id")
  .delete(withAuth, deleteUserVid);

module.exports = router;