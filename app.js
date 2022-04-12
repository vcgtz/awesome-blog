require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const hbs = require('hbs');
const passport = require('./config/passport');
const registerHbsHelpers = require('./helpers/hbs');

const router = require('./routes');

const start = async () => {
  // Express config
  app.set('views', `${__dirname}/views`);
  app.set('view engine', 'hbs');
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(methodOverride('_method'));
  app.use(session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  app.use((req, res, next) => {
    app.locals.currentUrl = req.originalUrl;
    next();
  });

  hbs.registerPartials(`${__dirname}/views/partials`);
  registerHbsHelpers(hbs);

  // Routes
  app.use('/', router);

  // Start server
  const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`The application started on port ${server.address().port}`);
  });
};

start();
