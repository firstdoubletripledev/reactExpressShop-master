var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ordersSchema = new Schema({
	'code' : String,
	'createdate' : String,
	'status' : String,
	'price' : String,
	'user' : String,
	'products' : String
});

module.exports = mongoose.model('orders', ordersSchema);
