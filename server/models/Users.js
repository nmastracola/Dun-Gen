// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// DEFINE SCHEMA
// ============================================================
var usersSchema = mongoose.Schema({
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

usersSchema.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

usersSchema.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};


// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Users', usersSchema);