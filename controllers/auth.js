const AuthController = {
  showLogin(req, res) {
    res.render('auth/login.hbs', {
      error: req.flash('error').shift(),
    });
  },
};

module.exports = AuthController;
