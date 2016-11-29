// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var chatSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    campaign_id: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    time_stamp: {
        type: Date,
        required: false
    }
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Chat', chatSchema);
