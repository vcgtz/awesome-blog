const Post = require('../../database/models/PostSchema');
const Category = require('../../database/models/CategorySchema');

const BlogController = {
  async index(req, res) {
    const posts = await Post.find({ publishedAt: { $ne: null } })
      .sort({ createdAt: 'desc' })
      .limit(10)
      .exec();
    const categories = await Category.find({})
      .exec();

    res.render('blog/index.hbs', {
      posts,
      categories,
    });
  },
};

module.exports = BlogController;
