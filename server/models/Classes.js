// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var classesSchema = mongoose.Schema({
  
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Classes', classesSchema);