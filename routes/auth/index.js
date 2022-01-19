const express = require('express');
const router = express.Router();
const passport = require('passport');

const AuthController = require('../../controllers/auth');

// Login form
router.get('/login', AuthController.showLogin);

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
    (req, res) => res.redirect('/dashboard')
);

// Logout

module.exports = router;
