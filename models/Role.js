const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  privilege: {
    type: String,
    lowercase: true,
    required: true
  }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;