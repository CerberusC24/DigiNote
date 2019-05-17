const router = require('express').Router();
const users = require('./users.js');
const posts = require('./post.js');
const category = require('./category');
const book = require('./book');
const img = require('./img');
const song = require('./song');
const video = require('./movie');
const bookpost = require('./bookpost');
const categorypost = require('./categorypost');
const imgpost = require('./imgpost');
const songpost = require('./songpost');
const moviepost = require('./moviepost');
const external = require('./external');

router.use('/users', users);
router.use('/post', posts);
router.use('/category', category);
router.use('/book', book);
router.use('/img', img);
router.use('/song', song);
router.use('/movie', video);
router.use('/bookpost', bookpost);
router.use('/categorypost', categorypost);
router.use('/imgpost', imgpost);
router.use('/songpost', songpost);
router.use('/moviepost', moviepost);
router.use('/external', external);

module.exports = router;