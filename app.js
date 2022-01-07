const express = require('express');
const path = require('path');
const app = express();

const hbs = require('hbs');
const router = require('./routes');

// Express config
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', router);

// Start server
const server = app.listen(3000, () => {
  console.log(`The application started on port ${server.address().port}`);
});
