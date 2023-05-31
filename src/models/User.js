const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  city: String,
  country: String,
  favorite_sport: String,
});

module.exports = mongoose.model('User', UserSchema);