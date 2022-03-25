const express = require('express');

const router = express.Router();
const { isloggedIn } = require('../middlewares/auth');

const homeRoutes = require('./home');
const dashboardRoutes = require('./dashboard');
const authRoutes = require('./auth');

// Home
router.get('/', homeRoutes);

// Auth
router.use('/', authRoutes);

// Dashboard routes
router.use('/dashboard', [isloggedIn], dashboardRoutes);

module.exports = router;
