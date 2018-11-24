const mongoose = require('mongoose');

const { Schema } = mongoose;

const ordersSchema = new Schema({
  code: String,
  createdate: String,
  status: String,
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  firstName: String,
  lastName: String,
  addressShip: String,
  phoneNumberShip: String,
  cart: Object,


});

module.exports = mongoose.model('orders', ordersSchema);
