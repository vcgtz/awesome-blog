const passport = require('passport');
const bcryptjs = require('bcryptjs');
const LocalStrategy = require('passport-local');
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

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;

