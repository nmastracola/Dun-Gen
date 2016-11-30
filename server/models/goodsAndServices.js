// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var goodsAndServicesSchema = mongoose.Schema({
    Item: {
        type: String,
        required: true
    },
    Cost: {
        type: Number,
        required: false
    },
    Weight: {
        type: Number,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('GoodsAndServices', goodsAndServicesSchema);
