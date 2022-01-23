const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

const { isloggedIn } = require('../../middlewares/auth');

const DashboardController = require('../../controllers/dashboard/dashboard');
const CategoryController = require('../../controllers/dashboard/category');

// Dashboard
router.get('/', isloggedIn, DashboardController.home);

// Categories
router.get('/categories', CategoryController.index);
router.get('/categories/create', csrfProtection, CategoryController.create);
router.get('/categories/:id/edit', CategoryController.edit);
router.post('/categories', csrfProtection, CategoryController.store);

module.exports = router;
