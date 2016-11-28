// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var classSchema = mongoose.Schema({
  class: {
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
      preReqs: [{
          preReq: {
              type: String,
              required: true
          }
      }],
      hitDie: {
          type: String,
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
          baseAttackBonus: [{
              type: Number,
              required: true
          }],
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
              specialAbility: {
                  type: String,
                  required: true
              }
          }],
      }],
      specialAbilities: [{
          specialAbility: {
              type: String,
              required: true
          },
          specialDescription: {
              type: String,
              required: true
          },
          specialShortDescription: {
              type: String,
              required: true
          },
          specialPreReqs: [{
              type: String,
              required: true
          }]
      }],
      variations: [{
          variationsAbility: {
              type: String,
              required: true
          },
          variationsDescription: {
              type: String,
              required: true
          },
          variationsShortDescription: {
              type: String,
              required: true
          },
          variationsPreReqs: [{
              type: String,
              required: true
          }]
      }]

  }
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Class', classSchema);
