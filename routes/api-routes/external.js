const router = require('express').Router();
const withAuth = require('../../middleware/authentication');
const {
  spotifyThis,
  movieThis,
  callBook
} = require('../../controllers/external');

router
  .route('/song')
  .get(spotifyThis);

router
  .route('/movie')
  .get(movieThis);

router
  .route('/book')
  .get(callBook);

module.exports = router;