const Category = require('../database/models/CategorySchema');

const CategoryController = {
  index (req, res) {
    res.send('index');
  },

  create (req, res) {
    res.render('dashboard/category/create.hbs');
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
      res.redirect('/dashboard/categories/create')
    }
  },

  show (req, res) {

  },

  edit (req, res) {
    res.send('edit ' + req.params.id);
  },

  update (req, res) {

  },

  destroy (req, res) {

  },
};

module.exports = CategoryController;
