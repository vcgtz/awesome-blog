const { Sequelize } = require('sequelize');

const getConnection = async () => {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mariadb',
    },
  );

  return sequelize;
};

const databaseConnect = async () => {
  const sequelize = await getConnection();

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database: ', error);
  }
};

module.exports = {
  getConnection,
  databaseConnect,
};
