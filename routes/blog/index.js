const express = require('express');

const router = express.Router();

const BlogController = require('../../controllers/blog/blog');

router.get('/', BlogController.index);

router.get('/:slug', BlogController.post);

module.exports = router;
