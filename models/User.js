const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    firstName: String,
    lowercase: true,
    required: true
  },
  lastName: {
    lastName: String,
    lowercase: true,
    required: true
  },
  email: {
    email: String,
    lowercase: true,
    required: true,
    unique: true
  },
  mobile: {
    mobile: Number,
    required: false,
    unique: true
  },
  gender: {
    gender: String,
    lowercase: true,
    required: true
  },
  dob: {
    date: String,
    required: true
  },
  password: {
    password: String,
    required: true
  },
  roles: [{
    type: Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;