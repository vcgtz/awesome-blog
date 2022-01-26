const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { body } = require('express-validator');

const { categoryValidations } = require('../../middlewares/auth');
const DashboardController = require('../../controllers/dashboard/dashboard');
const CategoryController = require('../../controllers/dashboard/category');

// Dashboard
router.get('/', DashboardController.home);

// Categories
router.get('/categories', [csrfProtection], CategoryController.index);
router.get('/categories/create', [csrfProtection], CategoryController.create);
router.post('/categories', [
    csrfProtection,
    body('name', 'Name is required').not().isEmpty(),
    body('description', 'Description is required').not().isEmpty(),
    categoryValidations
], CategoryController.store);
router.get('/categories/:id/edit', [csrfProtection], CategoryController.edit);
router.put('/categories/:id', [csrfProtection], CategoryController.update);
router.delete('/categories/:id', [csrfProtection], CategoryController.destroy);

module.exports = router;
