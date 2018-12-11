// import mongoose module
import mongoose from 'mongoose';

// get Schema from  mongoose module
const { Schema } = mongoose;

// create new schema
const usersSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  address: String,
  phonenumber: String,
  role: { type: String, default: 'user' },
  token: String,
  firstName: String,
  lastName: String,
  birthday: String,
});

// export model
export default mongoose.model('users', usersSchema);
