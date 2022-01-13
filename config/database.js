const mongoose = require('mongoose');

const databaseConnect = async () => {
  try {
    await mongoose.connect('');

    console.log('Database connected...');
  } catch (err) {
    console.error(err);
    throw new Error('Error with connection of the database');
  }
};

module.exports = {
  databaseConnect,
};
