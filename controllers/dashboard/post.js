const PostController = {
  async index(req, res) {
    
  },

  async create(req, res) {
    const [errors] = req.flash('errors');

    res.render('dashboard/post/create.hbs', {
      csrfToken: req.csrfToken(),
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
