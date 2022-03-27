const BlogController = {
  index(req, res) {
    res.render('blog/index.hbs');
  },
};

module.exports = BlogController;
