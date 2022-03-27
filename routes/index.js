const express = require('express');

const router = express.Router();
const { isloggedIn } = require('../middlewares/auth');

const homeRoutes = require('./home');
const blogRoutes = require('./blog');
const dashboardRoutes = require('./dashboard');
const authRoutes = require('./auth');

// Auth
router.use('/', authRoutes);

// Home
router.use('/', homeRoutes);

// Blog
router.use('/blog', blogRoutes);

// Dashboard routes
router.use('/dashboard', [isloggedIn], dashboardRoutes);

module.exports = router;
