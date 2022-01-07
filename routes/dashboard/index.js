const express = require('express');
const router = express.Router();

// Dashboard home
router.get('/', (req, res) => {
  res.render('dashboard/index.hbs');
});

module.exports = router;
