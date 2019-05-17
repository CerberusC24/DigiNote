const router = require('express').Router();
const withAuth = require('../../middleware/authentication');
const {
  spotifyThis,
  movieThis,
  callBook
} = require('../../controllers/external');

router
  .route('/api/song/search')
  .get(withAuth, spotifyThis);
router
  .route('/api/movie/search')
  .get(withAuth, movieThis)
  router
  .route('/api/book/search')
  .get(withAuth, callBook);

module.exports = router;