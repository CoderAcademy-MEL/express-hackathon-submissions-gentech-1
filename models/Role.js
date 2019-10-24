const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  privilege: {
    type: String,
    lowercase: Boolean,
    required: Boolean
  }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;