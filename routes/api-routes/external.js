const router = require('express').Router();
const withAuth = require('../../middleware/authentication');
const {
  spotifyThis,
  movieThis,
  callBook
} = require('../../controllers/external');

// localhost:3000/api/search/song
router
  .route('/song')
  .get(withAuth, spotifyThis);

router
  .route('/movie')
  .get(withAuth, movieThis);

router
  .route('/book')
  .get(callBook);

module.exports = router;