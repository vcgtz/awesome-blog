require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

const hbs = require('hbs');
const router = require('./routes');

const { databaseConnect } = require('./config/database');


const start = async () => {
  // Express config
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.use(express.static(path.join(__dirname, 'public')))

  hbs.registerPartials(__dirname + '/views/partials');

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
