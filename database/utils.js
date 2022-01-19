const User = require('./models/UserSchema');
const bcryptjs = require('bcryptjs');

const createAdminUser = async () => {
  const salt = bcryptjs.genSaltSync();
  const password = bcryptjs.hashSync(process.env.ADMIN_PASSWORD, salt);

  try {
    const user = new User({
      name: process.env.ADMIN_NAME,
      lastname: process.env.ADMIN_LASTNAME,
      username: process.env.ADMIN_USERNAME,
      email: process.env.ADMIN_EMAIL,
      password: password,
      brief: '',
      profile_image: '',
      role: process.env.ADMIN_ROLE,
      active: true
    });

    await user.save();
  } catch (err) {
    console.error('An error occurred while creating the admin user');
  }
}

module.exports = {
  createAdminUser,
};
