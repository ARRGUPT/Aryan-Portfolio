const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  fullDescription: {
    type: String,
    required: true
  },
  tech: [{
    type: String
  }],
  github: {
    type: String,
    required: true
  },
  live: {
    type: String
  },
  category: {
    type: String,
    enum: ['ai', 'ml', 'web', 'other'],
    default: 'other'
  },
  highlights: [{
    type: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', projectSchema);
