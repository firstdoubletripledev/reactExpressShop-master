import mongoose from 'mongoose';
const Schema   = mongoose.Schema;

const shopSchema = new Schema({
	'name' : String,
	'slogan' : String,
	'address' : String,
	'phonenumber' : String,
	'facebook' : String,
	'instagram' : String,
	'twitter' : String
});

export default mongoose.model('shop', shopSchema);
