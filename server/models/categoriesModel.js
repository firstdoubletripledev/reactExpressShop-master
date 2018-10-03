var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var categoriesSchema = new Schema({
	'name' : String
});

module.exports = mongoose.model('categories', categoriesSchema);
