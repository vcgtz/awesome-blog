const express = require('express');
const router = express.Router();

const { isloggedIn } = require('../../middlewares/auth');

const DashboardController = require('../../controllers/dashboard');

// Dashboard home
router.get('/', isloggedIn, DashboardController.home);

module.exports = router;
