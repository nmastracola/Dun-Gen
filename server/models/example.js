// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var exampleSchema = mongoose.Schema({
  example: {
    type: String, 
    required: true
  },
  example2: {
    type: String,
    required: true
  }
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Example', exampleSchema);