// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var skillsSchema = mongoose.Schema({
    Skill: {
        type: String,
        required: true
    },
    Barbarian: {
        type: Boolean,
        required: true
    },
    Bard: {
        type: Boolean,
        required: true
    },
    Cleric: {
        type: Boolean,
        required: true
    },
    Druid: {
        type: Boolean,
        required: true
    },
    Fighter: {
        type: Boolean,
        required: true
    },
    Monk: {
        type: Boolean,
        required: true
    },
    Paladin: {
        type: Boolean,
        required: true
    },
    Ranger: {
        type: Boolean,
        required: true
    },
    Rogue: {
        type: Boolean,
        required: true
    },
    Sorcerer: {
        type: Boolean,
        required: true
    },
    Wizard: {
        type: Boolean,
        required: true
    },
    Untrained: {
        type: Boolean,
        required: true
    },
    Ability: {
        type: String,
        required: true
    },
    ArmorCheck: {
        type: Boolean,
        required: true
    },
    Description: {
        type: String,
        required: false
    }
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Skills', skillsSchema);
