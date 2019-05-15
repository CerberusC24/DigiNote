const router = require('express').Router();
const media = require('./media.js');
const users = require('./users.js');
const posts = require('./post.js');

// router.use('/media', media);
router.use('/users', users);
router.use('/post', posts);

module.exports = router;
