const express = require('express');
const router = express.Router();

const AuthController = require('../../controllers/auth');

// Login form
router.get('/login', AuthController.showLogin);

// Logout

module.exports = router;
