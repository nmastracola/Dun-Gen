// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var classSchema = mongoose.Schema({
      class: {
          type: String,
          required: true
      },
      classDescription: {
          type: String,
          required: true
      },
      role: {
          type: String,
          required: true
      },
      alignmentRestriction: {
          lawfulGood: {
              type: Boolean
          },
          lawfulNeutral: {
              type: Boolean
          },
          lawfulEvil: {
              type: Boolean
          },
          neutralGood: {
              type: Boolean
          },
          neutralNeutral: {
              type: Boolean
          },
          neutralEvil: {
              type: Boolean
          },
          chaoticGood: {
              type: Boolean
          },
          chaoticNeutral: {
              type: Boolean
          },
          chaoticEvil: {
              type: Boolean
          },
      },
      hitDie: {
          type: Number,
          required: true
      },
      skillsPerLevel: {
          type: Number,
          required: true
      },
      levels:[{
          level: {
              type: Number,
              required: true
          },
          baseAttackBonus: {
              type: Number,
              required: true
          },
          fortSave: {
              type: Number,
              required: true
          },
          refSave: {
              type: Number,
              required: true
          },
          willSave: {
              type: Number,
              required: true
          },
          special: [{
              type: String    
          }],
      }],
      specialAbilities: [{
          specialAbility: {
              type: String
          },
          specialDescription: {
              type: String
          },
          specialLevelReq: {
              type: Number
          },
          specialOtherReq: {
              type: String
          }
      }],
      variations: [{
          variationsAbility: {
              type: String
          },
          variationsDescription: {
              type: String
          },
          variationsLevelReq: {
              type: Number
          },
          variationsOtherReq: {
              type: String
          }
      }]
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Classes', classSchema);
