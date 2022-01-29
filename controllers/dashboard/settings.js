const SettingsController = {
  async index(req, res) {
    res.render('dashboard/settings/index.hbs');
  },
};

module.exports = SettingsController;
