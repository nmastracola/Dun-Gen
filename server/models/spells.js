// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');

// DEFINE SCHEMA
// ============================================================
var spellsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  subschool: {
    type: String
  },
  descriptor: {
    type: String
  },
  spellLevel: {
    type: String
  },
  catingTime: {
    type: String
  },
  components: {
    type: String
  },
  costlyComponents: {
    type: Number
  },
  range: {
    type: String
  },
  area: {
    type: String
  },
  effect: {
    type: String
  },
  targets: {
    type: String
  },
  duration: {
    type: String
  },
  dismissable: {
    type: Number
  },
  shapeable: {
    type: Number
  },
  savingThrow: {
    type: String
  },
  spellResistence: {
    type: String
  },
  description:  {
    type: String
  },
  source: {
    type: String
  },
  fullText: {
    type: String
  },
  verbal: {
    type: Number
  },
  somatic: {
    type: Number
  },
  material: {
    type: Number
  },
  focus: {
    type: Number
  },
  divineFocus: {
    type: Number
  },
  sor: {
    type: Number
  },
  wiz: {
    type: Number
  },
  cleric: {
    type: Number
  },
  druid: {
    type: Number
  },
  ranger: {
    type: Number
  },
  bard: {
    type: Number
  },
  paladin: {
    type: Number
  },
  alchemist: {
    type: Number
  },
  summoner: {
    type: Number
  },
  witch: {
    type: Number
  },
  inquisitor: {
    type: Number
  },
  oracle: {
    type: Number
  },
  antipaladin: {
    type: Number
  },
  magus: {
    type: Number
  },
  adept: {
    type: Number
  },
  deity: {
    type: String
  },
  slaLevel: {
    type: Number
  },
  domain: {
    type: String
  },
  shortDescription: {
    type: String
  },
  acid: {
    type: Number
  },
  air: {
    type: Number
  },
  chaotic: {
    type: Number
  },
  cold: {
    type: Number
  },
  curse: {
    type: Number
  },
  darkness: {
    type: Number
  },
  death: {
    type: Number
  },
  disease: {
    type: Number
  },
  earth: {
    type: Number
  },
  electricity: {
    type: Number
  },
  emotion: {
    type: Number
  },
  evil: {
    type: Number
  },
  fear: {
    type: Number
  },
  fire: {
    type: Number
  },
  force: {
    type: Number
  },
  good: {
    type: Number
  },
  languageDependent: {
    type: Number
  },
  lawful: {
    type: Number
  },
  light: {
    type: Number
  },
  mindAffecting: {
    type: Number
  },
  pain: {
    type: Number
  },
  poison: {
    type: Number
  },
  shadow: {
    type: Number
  },
  sonic: {
    type: Number
  },
  water: {
    type: Number
  },
  linkText: {
    type: String
  },
  id: {
    type: Number
  },
  materialCosts: {
    type: Number
  },
  bloodline: {
    type: String
  },
  patron: {
    type: String
  },
  mythicText: {
    type: String
  },
  augmented: {
    type: String
  },
  mythic: {
    type: String
  }
});

// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Spells', spellsSchema);
