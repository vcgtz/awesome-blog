const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  lastname: {
    type: String,
    required: [true, 'Lastname is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  brief: {
    type: String,
  },
  profile_image: {
    type: String,
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: ['GOD_OF_WAR', 'ADMIN', 'WRITER', 'USER', 'GUEST']
  },
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = model('User', UserSchema);
