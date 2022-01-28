const Category = require('../../database/models/CategorySchema');
const Post = require('../../database/models/PostSchema');

const PostController = {
  async index(req, res) {
    res.send('hello');
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
    let slug = req.body.slug;
    let published_at = null;

    if (!slug) {
      slug = req.body.title.replaceAll(' ', '-').toLowerCase();
    }

    if (req.body.publish) {
      published_at = new Date();
    }

    const post = new Post({
      title: req.body.title,
      brief: req.body.brief,
      slug: slug,
      content: req.body.content,
      category: req.body.category,
      user: req.user._id,
      published_at: published_at
    });

    try {
      await post.save();

      res.redirect('/dashboard/posts');
    } catch (err) {
      console.error(err);
      res.redirect('/dashboard/posts/create');
    }
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
