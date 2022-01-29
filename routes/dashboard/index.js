const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { body } = require('express-validator');

const { categoryValidations, postValidations } = require('../../middlewares/auth');
const DashboardController = require('../../controllers/dashboard/dashboard');
const CategoryController = require('../../controllers/dashboard/category');
const PostController = require('../../controllers/dashboard/post');
const ProfileController = require('../../controllers/dashboard/profile');
const SettingsController = require('../../controllers/dashboard/settings');

// Dashboard
router.get('/', DashboardController.home);

// Profile
router.get('/my-profile', ProfileController.index);

// Settings
router.get('/settings', SettingsController.index);

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
router.put('/categories/:id', [
    csrfProtection,
    body('name', 'Name is required').not().isEmpty(),
    body('description', 'Description is required').not().isEmpty(),
    categoryValidations
], CategoryController.update);
router.delete('/categories/:id', [csrfProtection], CategoryController.destroy);

// Posts
router.get('/posts', [csrfProtection], PostController.index);
router.get('/posts/create', [csrfProtection], PostController.create);
router.post('/posts', [
    csrfProtection,
    body('title', 'Title is required').not().isEmpty(),
    body('brief', 'Brief is required').not().isEmpty(),
    body('content', 'Content is required').not().isEmpty(),
    body('category', 'Categoty is required').not().isEmpty(),
    postValidations,
], PostController.store);
router.get('/posts/:id/edit', [csrfProtection], PostController.edit);
router.put('/posts/:id', [
    csrfProtection,
    body('title', 'Title is required').not().isEmpty(),
    body('brief', 'Brief is required').not().isEmpty(),
    body('content', 'Content is required').not().isEmpty(),
    body('category', 'Categoty is required').not().isEmpty(),
    postValidations,
], PostController.update);
router.delete('/posts/:id', [csrfProtection], PostController.destroy);

module.exports = router;
