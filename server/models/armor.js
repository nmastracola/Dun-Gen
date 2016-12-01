// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var armorSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Cost: {
        type: Number,
        required: false
    },
    ArmorShieldBonus: {
            type: Number,
            required: false
    },
    MaximumDexBonus: {
            type: Number,
            required: false
    },
    ArmorCheckPenalty: {
        type: Number,
        required: false
    },
    ArcanespellFailureChance: {
        type: Number,
        required: false
    },
    EquiptSpeed30: {
        type: Number,
        required: false
    },
    EquiptSpeed20: {
        type: Number,
        required: false
    },
    Weight: {
        type: Number,
        required: false
    },
    type:  {
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
module.exports = mongoose.model('Armor', armorSchema);
