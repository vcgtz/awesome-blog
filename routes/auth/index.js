const express = require('express');

const router = express.Router();
const passport = require('passport');

const AuthController = require('../../controllers/auth');

// Login form
router.get('/login', AuthController.showLogin);

// Login
router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login',
    failureMessage: true,
    failureFlash: true,
  }),
  (req, res) => res.redirect('/dashboard'),
);

// Logout
router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
