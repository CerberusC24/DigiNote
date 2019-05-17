const router = require('express').Router();
const withAuth = require('../../middleware/authentication');
const {
  spotifyThis,
  movieThis,
  callBook
} = require('../../controllers/external');

router
  .route('/song/search')
  .get(withAuth, spotifyThis);
router
  .route('/movie/search')
  .get(withAuth, movieThis)

  router
  .route('/book/search')
  .get(callBook);

module.exports = router;