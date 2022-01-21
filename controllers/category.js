const CategoryController = {
  index (req, res) {
    res.send('index');
  },

  create (req, res) {
    res.send('create');
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
