const Category = require('../../database/models/CategorySchema');
const { validationResult } = require('express-validator');

const CategoryController = {
  async index (req, res) {
    const categories = await Category.find({})
      .sort({ createdAt: 'desc' })
      .exec();

    res.render('dashboard/category/index.hbs', {
      csrfToken: req.csrfToken(),
      categories
    });
  },

  async create (req, res) {
    const [errors] = req.flash('errors');

    res.render('dashboard/category/create.hbs', {
      csrfToken: req.csrfToken(),
      errors
    });
  },

  async store (req, res) {
    let slug = req.body.slug;

    if (!slug) {
      slug = req.body.name.replaceAll(' ', '-').toLowerCase();
    }

    const category = new Category({
      name: req.body.name,
      description: req.body.description,
      slug: slug
    });

    try {
      await category.save();

      res.redirect('/dashboard/categories');
    } catch (err) {
      console.error(err);
      res.redirect('/dashboard/categories/create');
    }
  },

  async show (req, res) {

  },

  async edit (req, res) {
    try {
      const category = await Category.findById(req.params.id).exec();

      if (!category) {
        return res.status(404).send('Not found');
      }
  
      res.render('dashboard/category/create.hbs', {
        csrfToken: req.csrfToken(),
        category,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal error');
    }
  },

  async update (req, res) {
    let slug = req.body.slug;

    if (!slug) {
      slug = req.body.name.replaceAll(' ', '-').toLowerCase();
    }

    try {
      await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        slug
      });

      res.redirect('/dashboard/categories');
    } catch (err) {
      console.error(err);
      res.redirect(`/dashboard/categories/${req.params.id}/edit`);
    }
  },

  async destroy (req, res) {
    try {
      const category = await Category.findByIdAndDelete(req.params.id).exec();
    } catch (err) {
      console.error(err);
    }

    return res.redirect('/dashboard/categories');
  },
};

module.exports = CategoryController;
