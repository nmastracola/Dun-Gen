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
  
  // {
  // "name": "Acrobatic",
  // "subtype": "general"
  // "description": "You are skilled at leaping, jumping, and flying.",
  // "prerequisites": null,
  // "benefits": "You get a +2 bonus on all Acrobatics and Fly skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.",
  // "special": "things"
  // }
  // 
  // {
  // "name": "Acrobatic Steps",
  // "subtype": "general"
  // "description": "You can easily move over and through obstacles.",
  // "prerequisites": [{
  // 	"type": "attribute",
  // 	"value": ["dex", "15"]
  // },
  // {
  // 	"type": "feat",
  // 	"value": "nimble moves"
  // }],
  // "benefits": "Whenever you move, you may move through up to 15 feet of difficult terrain each round as if it were normal terrain. The effects of this feat stack with those provided by Nimble Moves (allowing you to move normally through a total of 20 feet of difficult terrain each round).",
  // "special": "things"
  // }
  // 
  // Feats left out: 
  // Improved Familiar
  // Leadership
  // 
  // Improvised Weapon Mastery uses an "or" on feat prereqs that needs to be handled somehow
  // as does Master Craftsman
  // 
  // need to consider how to handle the school/weapon types choosings in things like
  // weapon focus
  // spell focus
  // 
  // PREREQ TYPES:
  // feat
  // classLevel
  // classFeature
  // attribute
  // proficiency
  // canCast
  // casterLevel
  // bab
  // hasFamiliar
  // characterLevel
  // hasSkillRanks
  // hasCriticalFeats

  
  
  
  
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Example', exampleSchema);