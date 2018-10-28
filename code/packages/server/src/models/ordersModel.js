const mongoose = require('mongoose');

const { Schema } = mongoose;

const ordersSchema = new Schema({
  code: String,
  createdate: String,
  status: String,
  price: String,
  user: String,
  products: String,
});

module.exports = mongoose.model('orders', ordersSchema);
