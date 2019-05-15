const router = require("express").Router();
const withAuth = require("../../middleware/authentication");

const {newPost, getUserPosts} = require("../../controllers/post")

router 
  .route("/")
  .get(withAuth, getUserPosts);

router 
  .route("/")
  .post(withAuth, newPost);

  module.exports = router;
