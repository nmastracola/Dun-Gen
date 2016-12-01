// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');

// DEFINE SCHEMA
// ============================================================
var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('TempUser', userSchema);
