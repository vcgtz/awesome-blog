const express = require('express');

const router = express.Router();
const { isloggedIn } = require('../middlewares/auth');

const dashboardRoutes = require('./dashboard');
const authRoutes = require('./auth');

// Home
router.get('/', (req, res) => {
  res.render('index.hbs');
});

// Auth
router.use('/', authRoutes);

// Dashboard routes
router.use('/dashboard', [isloggedIn], dashboardRoutes);

module.exports = router;
