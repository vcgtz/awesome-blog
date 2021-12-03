const express = require('express');
const path = require('path');
const app = express();

const hbs = require('hbs');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index.hbs');
})

const server = app.listen(3000, () => {
  console.log(`The application started on port ${server.address().port}`);
});
