const { validationResult } = require('express-validator');

const isloggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/login');
};

const categoryValidations = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = {};
    validationErrors.array().forEach((err) => {
      errors[err.param] = err.msg;
    });

    req.flash('errors', errors);

    return res.redirect('/dashboard/categories/create');
  }

  return next();
};

const postValidations = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = {};
    validationErrors.array().forEach((err) => {
      errors[err.param] = err.msg;
    });

    req.flash('errors', errors);

    return res.redirect('/dashboard/posts/create');
  }

  return next();
};

module.exports = {
  isloggedIn,
  categoryValidations,
  postValidations,
};
