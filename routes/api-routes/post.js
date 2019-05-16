const router = require("express").Router();
const withAuth = require("../../middleware/authentication");

const {newPost, getUserPosts, deleteUserPost, updateUserPost} = require("../../controllers/post")

router 
  .route("/")
  .get(withAuth, getUserPosts)
  .post(withAuth, newPost)
  .delete(withAuth, deleteUserPost)
  .put(withAuth, updateUserPost);

  module.exports = router;
