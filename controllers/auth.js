const AuthController = {
  showLogin (req, res) {
    res.render('auth/login.hbs');
  },
};

module.exports = AuthController;
