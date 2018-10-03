var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usersSchema = new Schema({
	'name' : String,
	'password' : String,
	'address' : String,
	'phonenumber' : String,
	'role' : String,
	'token' : String
});

module.exports = mongoose.model('users', usersSchema);
