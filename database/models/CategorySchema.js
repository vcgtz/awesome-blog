const { Schema, model } = require('mongoose');

const CategorySchema = Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
  },
  description: {
    type: String,
    required: [true, 'Category description is required'],
  },
  slug: {
    type: String,
    required: [true, 'Category slug is required'],
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
}, {
  timestamps: true,
});

module.exports = model('Category', CategorySchema);
