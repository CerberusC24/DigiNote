const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {newVideo, getAllVideos} = require("../../controllers/video")

router 
  .route("/")
  .get(withAuth, getAllVideos);

router 
  .route("/")
  .post(withAuth, newVideo);

  module.exports = router;