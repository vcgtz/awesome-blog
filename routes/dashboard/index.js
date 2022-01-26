const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { body } = require('express-validator');

const { categoryValidations } = require('../../middlewares/auth');
const DashboardController = require('../../controllers/dashboard/dashboard');
const CategoryController = require('../../controllers/dashboard/category');
const PostController = require('../../controllers/dashboard/post');

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

// Posts
router.get('/posts', [csrfProtection], PostController.index);
router.get('/posts/create', [csrfProtection], PostController.create);
router.post('/posts', [csrfProtection], PostController.store);
router.get('/posts/:id/edit', [csrfProtection], PostController.edit);
router.put('/posts/:id', [csrfProtection], PostController.update);
router.delete('/posts/:id', [csrfProtection], PostController.destroy);

module.exports = router;
