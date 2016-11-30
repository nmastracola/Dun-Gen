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
      shortClassDescription: {
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
      hasSpells: {
          type: Boolean,
          required: true
      },
      classCastingAttribute: {
        type: String
      },
      weaponProficiencies: {
        type: String
      },
      armorProficiencies: {
        type: String
      },
      genericLevelGain:[{
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
          }
      }],
      classLevelGain:[{
          level: {
            type: Number
          },
          specialAbility: [{
            type: String
          }],
          spellsKnown: [{
            type: Number
          }],
          spellsPerDay: [{
            type: Number
          }],
          evolvingAbility: [{
            name: {
              type: String
            },
            math: {
              dieType: {
                type: Number
              },
              numberOfDice: {
                type: Number
              },
              value: {
                type: String
              }
            }
          }]
      }],
      classSpecificAbilities: [{
          name: {
            type: String
          },
          description: {
            type: String
          },
          specialType: {
            type: String
          },
          chosen: {
            type: Boolean
          },
          levelReq: {
            type: Number
          },
          otherReq: [{
            type: {
              type: String
            },
            value: {
              type: String
            }
          }],
          math: {
            dieType: {
              type: Number
            },
            numberOfDice: {
              type: Number
            },
            value: {
              type: String
            }
          }
      }]
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Classes', classSchema);
