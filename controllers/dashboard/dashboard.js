const DashboardController = {
  home(req, res) {
    res.render('dashboard/index.hbs');
  },
};

module.exports = DashboardController;
