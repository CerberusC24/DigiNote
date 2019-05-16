const router = require('express').Router();
const {
  callBook
} = require('../../controllers/search');

router
  .route('/')
  .get(callBook);

module.exports = router;