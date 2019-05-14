// this file collects the other routes and provides the endpoint names
const router = require('express').Router();
const userRoutes = require('./users');
const dashboardRoutes = require('./dashboard');
const mediaRoutes = require('./media');

// prepend endpoints
router.use('/user', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/media', mediaRoutes);

module.exports = router;