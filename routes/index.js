const express = require('express');
const router = express.Router();

const dashboardRoutes = require('./dashboard');

// Home
router.get('/', (req, res) => {
  res.render('index.hbs');
});

// Dashboard routes
router.use('/dashboard', dashboardRoutes)

module.exports = router;
