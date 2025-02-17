const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);