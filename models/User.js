const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    firstName: String
  },
  lastName: {
    lastName: String
  },
  email: {
    email: String
  },
  mobile: {
    mobile: Number
  },
  gender: {
    gender: String
  },
  dob: {
    date: String
  },
  password: {
    password: String
  },
  roles: [{
    type: Schema.Types.ObjectId,
    ref: 'Role'
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;