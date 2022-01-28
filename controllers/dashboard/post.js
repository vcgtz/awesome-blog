const Category = require('../../database/models/CategorySchema');
const Post = require('../../database/models/PostSchema');

const PostController = {
  async index(req, res) {
    const posts = await Post.find({})
      .sort({ created_at: 'desc' })
      .exec();

    res.render('dashboard/post/index', {
      csrfToken: req.csrfToken(),
      posts
    });
  },

  async create(req, res) {
    const [errors] = req.flash('errors');
    const categories = await Category.find({})
      .sort({ createdAt: 'desc' })
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
      user: req.user.id,
      publishedAt: published_at
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
    try {
      const post = await Post.findById(req.params.id).exec();
      const categories = await Category.find({})
        .sort({ createdAt: 'desc' })
        .exec();

      if (!post) {
        return res.status(404).send('Not found');
      }

      res.render('dashboard/post/edit.hbs', {
        csrfToken: req.csrfToken(),
        post,
        categories,
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal error');
    }
  },

  async update(req, res) {

  },

  async destroy(req, res) {
    
  }
};

module.exports = PostController;
