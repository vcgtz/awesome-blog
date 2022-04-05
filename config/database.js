const { Sequelize } = require('sequelize');

const databaseConnect = async () => {
  const sequelize = new Sequelize('vg_blog', 'root', 'password1234', {
    host: '0.0.0.0',
    dialect: 'mariadb',
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database: ', error);
  }
};

module.exports = {
  databaseConnect,
};
