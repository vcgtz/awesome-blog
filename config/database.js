const mongoose = require('mongoose');
const User = require('../database/models/UserSchema');
const { createAdminUser } = require('../database/utils');

mongoose.connection.on('open', () => {
  User.find({}, async (err, users) => {
    if (!users.length && process.env.ADMIN_USERNAME) {
      createAdminUser();
    }
  });
});

const databaseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Database connected...');
  } catch (err) {
    console.error(err);
    throw new Error('Error with connection of the database');
  }
};

module.exports = {
  databaseConnect,
};
