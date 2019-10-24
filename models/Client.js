const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  profile_image: String,
  training_interests: String,
  trainers: [{
    type: Schema.Types.ObjectId,
    ref: 'Trainer'
  }]
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;