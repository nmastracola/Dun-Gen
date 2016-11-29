
// REQUIRE DEPENDENCIES
// =========================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// =========================================================
var bonusSpellsSchema = mongoose.Schema({
    abilityMod: {
      type: Number,
      required: true
    },
    bonusSpells: [{
      type: Number,
      required: true
    }]
});
// EXPORT SCHEMA
// =========================================================
module.exports = mongoose.model('BonusSpells', bonusSpellsSchema);
