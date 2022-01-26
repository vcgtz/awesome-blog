const { Schema, model } = require('mongoose');

const PostSchema = Schema({
  title: {
    type: String,
    required: [true, 'Title name is required'],
  },
  brief: {
    type: String,
    required: [true, 'Brief name is required'],
  },
  slug: {
    type: String,
    required: [true, 'Category slug is required'],
  },
  content: {
    type: String,
    required: [true, 'Category slug is required'],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  published_at: {
    type: Date,
    defaul: null
  },
}, {
  timestamps: true
});

module.exports = model('Post', PostSchema);
