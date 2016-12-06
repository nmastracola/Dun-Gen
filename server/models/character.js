// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var characterSchema = mongoose.Schema({
  static: [{
      userId: {
          // type: objectID,
          // ref: 'Users',
          // required: true
          type: String,
      },
      playerName: {
          type: String
      },
      characterName: {
          type: String,
          required: true
      },
      portraitURL:{
        type: String,
        default: 'http://i.imgur.com/WQ9QupQ.jpg'
      },
      campaign: {
          type: String
      },
      race: {
          type: String,
          required: true
      },
      classes: [{
          class: {
              type: String,
                  required: true
          },
          level: {
              type: Number,
              required: true
          }
      }],
      alignment: {
          type: String,
          required: true
      },
      experience: {
          type: Number,
          required: true
      }
  }],
  qualifications: [{
    type: {
      type: String
    },
    value: [{
      type: String
    }]
  }],
  core: {
      strength: {
          type: Number,
          required: true
      },
      tempStrength: {
          type: Number
      },
      dexterity: {
          type: Number,
          required: true
      },
      tempDexterity: {
          type: Number
      },
      constitution: {
          type: Number,
          required: true
      },
      tempConstitution: {
          type: Number
      },
      intelligence: {
          type: Number,
          required: true
      },
      tempIntelligence: {
          type: Number
      },
      wisdom: {
          type: Number,
          required: true
      },
      tempWisdom: {
          type: Number
      },
      charisma: {
          type: Number,
          required: true
      },
      tempCharisma: {
          type: Number
      },
      naturalArmorClass: {
          type: Number
      },
      miscArmorClass: {
          type: Number
      },
      miscInitiative: {
          type: Number
      },
      fortitudeBaseSave: {
          type: Number
      },
      fortitudeMagicModifier: {
          type: Number
      },
      fortitudeMiscellaneousModifier: {
          type: Number
      },
      reflexBaseSave: {
          type: Number
      },
      reflexMagicModifier: {
          type: Number
      },
      reflexMiscellaneousModifier: {
          type: Number
      },
      willBaseSave: {
          type: Number
      },
      willMagicModifier: {
          type: Number
      },
      willMiscellaneousModifier: {
          type: Number
      },
      currentHitPoints: {
          type: Number,
          required: true
      },
      temporaryHitPoints: {
          type: Number
      },
      maxHitPoints: {
          type: Number,
          required: true
      },
      hitPointsModifier: {
          type: Number
      },
      wounds: {
          type: String
      },
      speeds: {
          movementType: {
              type: String
          },
          movementSpeed: {
              type: Number
          }
      }
  },
  weapons: [{
      name: {
          type: String
      },
      type: {
          type: String
      },
      subtype: {
          type: String
      },
      cost: {
          type: Number
      },
      damage: {
          die: [{
              type: Number
          }],
          number: [{
              type: Number
          }]
      },
      critical: {
          threshold: {
              type: Number
          },
          multiplier: {
              type: Number
          }
      },
      range: {
          type: Number
      },
      weight: {
          type: Number
      },
      damageType: {
          blunt: {
              type: Boolean
          },
          piercing: {
              type: Boolean
          },
          slashing: {
              type: Boolean
          },
          other: {
              type: String
          }
      },
      special: {
          brace: {
              type: Boolean
          },
          disarm: {
              type: Boolean
          },
          double: {
              type: Boolean
          },
          monk: {
              type: Boolean
          },
          nonlethal: {
              type: Boolean
          },
          reach: {
              type: Boolean
          },
          trip: {
              type: Boolean
          }
      },
      description: {
          type: String
      },
      equipped: {
          type: Boolean
      },
      primary: {
          type: Boolean
      },
      offhand: {
          type: Boolean
      },
      ammunition: {
          type: Number
      },
      weaponAttackBonus: {
          type: Number
      },
      weaponDamageBonus: {
          type: Number
      },
      notes: {
          type: String
      }
  }],
  skills: [{
      name: {
          type: String,
          required: true
      },
      classSkill: {
          type: Boolean,
          required: true
      },
      ranks: {
          type: Number,
          required: true
      },
      primaryAttribute:{
          type: String,
          required: true
      },
      attributeModifier: {
          type: Number,
          required: true
      },
      miscellaneousModifier: {
          type: Number
      },
      total: {
          type: Number,
          required: true
      }
  }],
  spellsKnown: [{
      name: {
          type: String
      },
      spellTracker: {
          type: Number
      }
  }],
  feats: [{
      name: {
          type: String
      },
      active: {
          type: Boolean
      },
      available: {
        type: Number,
        default: 1
      }
  }],
  abilities: [{
      name: {
          type: String
      },
      active: {
          type: Boolean
      }
  }],
  equipment: [{
      armorClassItems: [{
          name: {
              type: String,
              required: true
          },
          cost: {
              type: Number
          },
          armorShieldBonus: {
              type: Number
          },
          maxDexBonus: {
              type: Number
          },
          armorCheckPenalty: {
              type: Number
          },
          arcaneSpellFailureChance: {
              type: Number
          },
          equipSpeed30: {
              type: Number
          },
          equipSpeed20: {
              type: Number
          },
          weight: {
              type: Number
          },
          type: {
              type: String,
              required: true
          },
          description: {
              type: String
          }
      }],
      gear: {
          item: {
              type: String,
              required: true
          },
          cost: {
              type: Number
          },
          weight: {
              type: Number
          },
          category: {
              type: String
          },
          description: {
              type: String
          }
      },
      wealth: {
          type: Number
      }
  }],
  customization: [{
      description: {
          type: String
      }
  }],
  journal: {
      type: String
  },
  menu: {
      colorScheme: {
          type: Number
      },
      portrait: {
          type: String
      }
  }
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Characters', characterSchema);
