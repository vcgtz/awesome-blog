const ProfileController = {
  async index(req, res) {
    res.render('dashboard/profile/index.hbs');
  },
};

module.exports = ProfileController;
