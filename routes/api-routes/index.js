const router = require('express').Router();
const media = require('./media.js');
const users = require('./users.js');

// router.use('/media', media);
router.use('/users', users);

module.exports = router;
