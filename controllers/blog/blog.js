const Post = require('../../database/models/PostSchema');

const BlogController = {
  async index(req, res) {
    const posts = await Post.find({ publishedAt: { $ne: null } })
      .sort({ createdAt: 'desc' })
      .limit(10)
      .exec();

    res.render('blog/index.hbs', {
      posts,
    });
  },
};

module.exports = BlogController;
