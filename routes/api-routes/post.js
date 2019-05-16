const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newPost,
  getUserPosts,
  deleteUserPost,
  updateUserPost
} = require("../../controllers/post")

router
  .route("/")
  .get(withAuth, getUserPosts)
  .post(withAuth, newPost);
  router
  .route("/delete/:id")
  .delete(withAuth, deleteUserPost);
  router
  .route("/update/:id")
  .put(withAuth, updateUserPost);  

module.exports = router;