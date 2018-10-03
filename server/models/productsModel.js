var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productsSchema = new Schema({
	'code' : String,
	'name' : String,
	'price' : String,
	'description' : String,
	'stock' : String,
	'category' : String,
	'status' : String
});

module.exports = mongoose.model('products', productsSchema);
