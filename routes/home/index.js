const express = require('express');

const router = express.Router();

const HomeController = require('../../controllers/home/home');

router.get('/', HomeController.index);

module.exports = router;
