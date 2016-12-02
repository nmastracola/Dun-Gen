// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var featsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subtype:[{
    type: String,
  }],
  description: {
    type: String,
    required: true
  },
  prerequisites: [{
    type: {
      type: String
    },
    value: [{
      type: String
    }]
  }],
  benefits: {
    type: String,
    required: true
  },
  special: {
    type: String,
  },
  math: {
    dieType: {
      type: Number
    },
    numberOfDice: {
      type: Number
    },
    modifiers: [{
      modifierType: {
        type: String
      },
      modifierValue: {
        type: String
      }
    }],
    evolvingModifiers: [{
      trigger: [{
        triggerAbility: {
          type: String
        },
        triggerThreshold: [{
          type: String
        }],
        bonusAbility: {
          type: String
        },
        bonusValue: [{
          type: String
        }]
        
      }]
    }]
  }


  
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Feats', featsSchema);