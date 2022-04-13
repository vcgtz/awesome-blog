const express = require('express');

const router = express.Router();

const BlogController = require('../../controllers/blog/blog');

router.get('/', BlogController.index);

router.get('/category/:slug', BlogController.category);
router.get('/:slug', BlogController.post);

module.exports = router;
