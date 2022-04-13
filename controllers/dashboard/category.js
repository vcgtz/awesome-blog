const { Category } = require('../../models');

const CategoryController = {
  async index(req, res) {
    const categories = await Category.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
    });

    res.render('dashboard/category/index.hbs', {
      csrfToken: req.csrfToken(),
      categories,
    });
  },

  async create(req, res) {
    const [errors] = req.flash('errors');

    res.render('dashboard/category/create.hbs', {
      csrfToken: req.csrfToken(),
      errors,
    });
  },

  async store(req, res) {
    let { slug } = req.body;

    if (!slug) {
      slug = req.body.name.replaceAll(' ', '-').toLowerCase();
    }

    try {
      await Category.create({
        name: req.body.name,
        description: req.body.description,
        slug,
      });

      res.redirect('/dashboard/categories');
    } catch (err) {
      console.error(err);
      res.redirect('/dashboard/categories/create');
    }
  },

  async edit(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);

      if (!category) {
        return res.status(404).send('Not found');
      }

      return res.render('dashboard/category/create.hbs', {
        csrfToken: req.csrfToken(),
        category,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal error');
    }
  },

  async update(req, res) {
    let { slug } = req.body;

    if (!slug) {
      slug = req.body.name.replaceAll(' ', '-').toLowerCase();
    }

    try {
      await Category.update({
        name: req.body.name,
        description: req.body.description,
        slug,
      }, {
        where: {
          id: req.params.id,
        },
      });

      res.redirect('/dashboard/categories');
    } catch (err) {
      console.error(err);
      res.redirect(`/dashboard/categories/${req.params.id}/edit`);
    }
  },

  async destroy(req, res) {
    try {
      await Category.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      console.error(err);
    }

    return res.redirect('/dashboard/categories');
  },
};

module.exports = CategoryController;
