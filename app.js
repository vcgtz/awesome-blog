require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('./config/passport');

const hbs = require('hbs');
const router = require('./routes');

const { databaseConnect } = require('./config/database');

const start = async () => {
  // Express config
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(methodOverride('_method'));
  app.use(session({ 
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  app.use((req, res, next) => {
    app.locals.currentUrl = req.originalUrl;
    next();
  });

  hbs.registerPartials(__dirname + '/views/partials');
  hbs.registerHelper('isEven', val => val % 2 === 0);
  hbs.registerHelper('isTabActive', (section, currentUrl) => currentUrl === section);
  hbs.registerHelper('readableDate', date => {
    if (!date) {
      return '';
    }

    const year = date.getFullYear();
    const month = ((date.getMonth() + 1) + '').padStart(2, '0');
    const day = date.getDate();

    const hours = (date.getHours() + '').padStart(2, '0');
    const minutes = (date.getMinutes() + '').padStart(2, '0');
    const seconds = (date.getSeconds() + '').padStart(2, '0');

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  });

  // Routes
  app.use('/', router);

  // Database connection
  databaseConnect();

  // Start server
  const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`The application started on port ${server.address().port}`);
  });
};

start();
