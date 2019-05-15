const router = require('express').Router();
const apiRoutes = require('../api-routes');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.json({
    message: "It's possible you're in the wrong place!"
  })
});

module.exports = router;
