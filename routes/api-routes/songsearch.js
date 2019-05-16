const router = require('express').Router();
const { searchSpotify } = require('../../controllers/songAxios');

// localhost:3000/api/searchsong
// expects query params artist="name"&track="name"
router
  .route('/')
  .get(searchSpotify);

module.exports = router;