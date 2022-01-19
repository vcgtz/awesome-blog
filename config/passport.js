const passport = require('passport');
const bcryptjs = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../database/models/UserSchema');

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, { message: 'Username or password incorrect' });
      }

      const isValidPassword = bcryptjs.compareSync(password, user.password);

      if (!isValidPassword) {
        return done(null, false, { message: 'Username or password incorrect' });
      }

      return done(null, user);
    });
  }
));

module.exports = passport;

