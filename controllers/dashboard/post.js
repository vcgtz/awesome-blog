const { Category, Post } = require('../../models');

const PostController = {
  async index(req, res) {
    const posts = await Post.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
    });

    res.render('dashboard/post/index', {
      csrfToken: req.csrfToken(),
      posts,
    });
  },

  async create(req, res) {
    const [errors] = req.flash('errors');
    const categories = await Category.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
    });

    res.render('dashboard/post/create.hbs', {
      csrfToken: req.csrfToken(),
      categories,
      errors,
    });
  },

  async store(req, res) {
    let { slug } = req.body;

    if (!slug) {
      slug = req.body.title.replaceAll(' ', '-').toLowerCase();
    }

    try {
      await Post.create({
        title: req.body.title,
        brief: req.body.brief,
        slug,
        content: req.body.content,
        categoryId: req.body.category,
        userId: req.user.id,
        published: !!req.body.publish,
      });

      res.redirect('/dashboard/posts');
    } catch (err) {
      console.error(err);
      res.redirect('/dashboard/posts/create');
    }
  },

  async edit(req, res) {
    try {
      const post = await Post.findByPk(req.params.id);
      const categories = await Category.findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      });

      if (!post) {
        return res.status(404).send('Not found');
      }

      return res.render('dashboard/post/edit.hbs', {
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
    let { slug } = req.body;

    if (!slug) {
      slug = req.body.title.replaceAll(' ', '-').toLowerCase();
    }

    try {
      await Post.update({
        title: req.body.title,
        brief: req.body.brief,
        content: req.body.content,
        category: req.body.category,
        slug,
        published: !!req.body.publish,
      }, {
        where: {
          id: req.params.id,
        },
      });

      res.redirect('/dashboard/posts');
    } catch (err) {
      console.error(err);
      res.redirect(`/dashboard/posts/${req.params.id}/edit`);
    }
  },

  async destroy(req, res) {
    try {
      await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      console.error(err);
    }

    return res.redirect('/dashboard/posts');
  },
};

module.exports = PostController;
