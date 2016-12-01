// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var characterSchema = mongoose.Schema({
  static: [{
      userId: {
          type: objectID,
          ref: 'Users',
          required: true
      },
      playerName: {
          type: String
      },
      characterName: {
          type: String,
          required: true
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
              type: String,
              required: true
          }
      }],
      alignment: {
          type: String,
          required: true
      },
      experience: {
          type: String,
          required: true
      }
  }],
  core: [{
      strength: {
          type: String,
          required: true
      },
      dexterity: {
          type: String,
          required: true
      },
      constitution: {
          type: String,
          required: true
      },
      intelligence: {
          type: String,
          required: true
      },
      wisdom: {
          type: String,
          required: true
      },
      charisma: {
          type: String,
          required: true
      },
      armorClass: {
          type: String,
          required: true
      },
      initiative: {
          type: String,
          required: true
      },
      fortitudeMagicModifier: {
          type: String
      },
      fortitudeMiscellaneousModifier: {
          type: String
      },
      reflexMagicodifier: {
          type: String
      },
      reflexMiscellaneousModifier: {
          type: String
      },
      willMagicModifier: {
          type: String
      },
      willMiscellaneousModifier: {
          type: String
      },
      currentHitPoints: {
          type: String,
          required: true
      },
      maxHitPoints: {
          type: String,
          required: true
      },
      hitPointsModifier: {
          type: String,
          required: true
      },
      wounds: {
          type: String,
          required: true
      },
      speeds: [{
          movementType: {
              type: String,
              required: true
          },
          movementSpeed: {
              type: String,
              required: true
          }
      }]
  }],
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
          type: Number,
          required: true
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
              type: String
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
              type: String,
              required: true
          },
          description: {
              type: String,
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
