const passport = require('passport');
const bcryptjs = require('bcryptjs');
const LocalStrategy = require('passport-local');
const User = require('../database/models/UserSchema');

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false, { message: 'Username or password are incorrect.' });
      }

      const isValidPassword = bcryptjs.compareSync(password, user.password);

      if (!isValidPassword) {
        return done(null, false, { message: 'Username or password are incorrect.' });
      }

      return done(null, user);
    });
  },
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
