const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  getAllBookPost,
  getAllPostBook,
  newBookPost
} = require("../../controllers/bookpost")

router
  .route("/")
  .post(withAuth, newBookPost);
router
  .route("/post/:postid")
  .get(withAuth, getAllBookPost)
router
  .route("/book/:bookid")
  .get(withAuth, getAllPostBook);

module.exports = router;