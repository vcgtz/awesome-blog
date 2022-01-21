const CategoryController = {
  index (req, res) {
    res.send('index');
  },

  create (req, res) {
    res.render('dashboard/category/create.hbs');
  },

  store (req, res) {

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
