// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var featsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subtype:[{
    type: String,
  }],
  description: {
    type: String,
    required: true
  },
  prerequisites: [{
    type: {
      type: String
    },
    value: [{
      type: String
    }]
  }],
  benefits: {
    type: String,
    required: true
  },
  special: {
    type: String,
  }


  
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Feats', featsSchema);