const router = require('express').Router();
const withAuth = require('../../middleware/authentication');
const {
  newBook,
  getAllBooks
} = require('../../controllers/book');

router
  .route('/')
  .get(withAuth, getAllBooks);

router
  .route('/')
  .post(withAuth, newBook);

module.exports = router;