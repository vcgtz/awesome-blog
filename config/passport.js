const passport = require('passport');
const bcryptjs = require('bcryptjs');
const LocalStrategy = require('passport-local');
const { User } = require('../models');

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ where: { username } })
      .then((user) => {
        if (!user) {
          return done(null, false, { message: 'Username or password are incorrect.' });
        }

        const isValidPassword = bcryptjs.compareSync(password, user.password);

        if (!isValidPassword) {
          return done(null, false, { message: 'Username or password are incorrect.' });
        }

        return done(null, user);
      })
      .catch((err) => done(err));
  },
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

module.exports = passport;
