const { Category, Post } = require('../../models');

const BlogController = {
  async index(req, res) {
    const posts = await Post.findAll({
      where: {
        published: true,
      },
      order: [
        ['createdAt', 'DESC'],
      ],
      limit: 10,
    });
    const categories = await Category.findAll();

    res.render('blog/index.hbs', {
      posts,
      categories,
    });
  },

  async post(req, res) {
    const post = await Post.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    const categories = await Category.findAll();

    if (!post) {
      res.sendStatus(404);
    }

    res.render('blog/post.hbs', {
      customCss: true,
      post,
      categories,
    });
  },

  async category(req, res) {
    const categories = await Category.findAll();
    const category = await Category.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    const posts = await Post.findAll({
      where: {
        published: true,
        categoryId: category.id,
      },
      order: [
        ['createdAt', 'DESC'],
      ],
      limit: 10,
    });

    res.render('blog/category.hbs', {
      customCss: true,
      posts,
      category,
      categories,
    });
  },
};

module.exports = BlogController;
