const express = require('express');
const router = express.Router();

const { isloggedIn } = require('../../middlewares/auth');

const DashboardController = require('../../controllers/dashboard');
const CategoryController = require('../../controllers/category');

// Dashboard
router.get('/', isloggedIn, DashboardController.home);

// Categories
router.get('/categories', CategoryController.index);
router.get('/categories/create', CategoryController.create);
router.get('/categories/:id/edit', CategoryController.edit);
router.post('/categories', CategoryController.store);

module.exports = router;
