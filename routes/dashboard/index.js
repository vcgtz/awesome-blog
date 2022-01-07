const express = require('express');
const router = express.Router();

// Dashboard home
router.get('/', (req, res) => {
  res.send('Dashboard');
});

module.exports = router;
