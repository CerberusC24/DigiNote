const router = require('express').Router();
const withAuth = require('../../middleware/authentication');
const {
  newBook,
  getAllBooks,
  deletePostBook
} = require('../../controllers/book');

router
  .route('/')
  .get(withAuth, getAllBooks);
router
  .route('/')
  .post(withAuth, newBook);

router
  .route('/delete/:id')
  .delete(withAuth, deletePostBook);

module.exports = router;