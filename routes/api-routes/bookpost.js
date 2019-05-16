const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {getAllBookPost,
  getAllPostBook,
  newBookPost} = require("../../controllers/category")

router
  .route("/")
  .post(withAuth, newBookPost);
router 
  .route("/:postid")
  .get(withAuth, getAllBookPost)


  router
  .route("/:bookid")
  .get(withAuth, getAllPostBook);

  module.exports = router;