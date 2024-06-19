const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  customId: String,
  company: String,
  name: String,
  category: String,
  price: Number,
  rating: Number,
  discount: Number,
});

module.exports = mongoose.model('Product', productSchema);
