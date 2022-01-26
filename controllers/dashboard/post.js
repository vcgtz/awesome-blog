const Category = require('../../database/models/CategorySchema');

const PostController = {
  async index(req, res) {
    
  },

  async create(req, res) {
    const [errors] = req.flash('errors');
    const categories = await Category.find({})
      .sort({created_at: 'desc'})
      .exec();

    res.render('dashboard/post/create.hbs', {
      csrfToken: req.csrfToken(),
      categories,
      errors
    });
  },

  async store(req, res) {

  },

  async show(req, res) {

  },

  async edit(req, res) {

  },

  async update(req, res) {

  },

  async destroy(req, res) {
    
  }
};

module.exports = PostController;
