const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api-routes');
const htmlRoutes = require('./html-routes/html-route.js');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.json({
    message: "It's possible you're in the wrong place!"
  })
});

module.exports = router;