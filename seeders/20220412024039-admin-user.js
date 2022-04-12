require('dotenv').config();

const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = bcryptjs.genSaltSync();
    const password = bcryptjs.hashSync(process.env.ADMIN_PASSWORD, salt);

    return queryInterface.bulkInsert('users', [{
      name: process.env.ADMIN_NAME,
      lastName: process.env.ADMIN_LASTNAME,
      username: process.env.ADMIN_USERNAME,
      password,
      email: process.env.ADMIN_EMAIL,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
