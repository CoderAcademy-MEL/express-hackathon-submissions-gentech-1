const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainerSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  profile_image: String,
  trainer_types: String,
  clients: [{
    type: Schema.Types.ObjectId,
    ref: 'Client'
  }]
});

const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;