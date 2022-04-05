const Post = require('../../database/models/PostSchema');
const Category = require('../../database/models/CategorySchema');

const BlogController = {
  async index(req, res) {
    const posts = await Post.find({ publishedAt: { $ne: null } })
      .sort({ createdAt: 'desc' })
      .limit(10)
      .exec();
    const categories = await Category.find({}).exec();

    res.render('blog/index.hbs', {
      posts,
      categories,
    });
  },

  async post(req, res) {
    const post = await Post.findOne({ slug: req.params.slug }).exec();
    const categories = await Category.find({}).exec();

    if (!post) {
      res.sendStatus(404);
    }

    res.render('blog/post.hbs', {
      customCss: true,
      post,
      categories,
    });
  },
};

module.exports = BlogController;
