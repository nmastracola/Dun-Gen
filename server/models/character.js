// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var armorSchema = mongoose.Schema({
  static: [{
      userId: {
          type: String
      },
      playerName: {
          type: String,
          required: true
      },
      characterName: {
          type: String,
          required: true
      },
      campaign: {
          type: String,
          required: true
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
      experiance: {
          type: String,
          required: true
      }
  }],
  core: [{
      strength: {
          type: String,
          required: true
      },
      strengthModifier: {
          type: String,
          required: true
      },
      dexterity: {
          type: String,
          required: true
      },
      dexterityModifier: {
          type: String,
          required: true
      },
      constitution: {
          type: String,
          required: true
      },
      constitutionModifier: {
          type: String,
          required: true
      },
      intelligence: {
          type: String,
          required: true
      },
      intelligenceModifier: {
          type: String,
          required: true
      },
      wisdom: {
          type: String,
          required: true
      },
      wisdomModifier: {
          type: String,
          required: true
      },
      charisma: {
          type: String,
          required: true
      },
      charismaModifier: {
          type: String,
          required: true
      },
      armorClassModifier: {
          type: String,
          required: true
      },
      initiativeModifier: {
          type: String,
          required: true
      },
      speedModifier: {
          type: String,
          required: true
      },
      charismaModifier: {
          type: String,
          required: true
      },
      fortitudeMacigModifier: {
          type: String,
          required: true
      },
      fortitudeMiscellaneousModifier: {
          type: String,
          required: true
      },
      reflexMacigModifier: {
          type: String,
          required: true
      },
      reflexMiscellaneousModifier: {
          type: String,
          required: true
      },
      willMacigModifier: {
          type: String,
          required: true
      },
      willMiscellaneousModifier: {
          type: String,
          required: true
      },
      currentHitPoints: {
          type: String,
          required: true
      },
      maxHitPoints: {
          type: String,
          required: true
      },
      HitPointsModifier: {
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
      name: {
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
      damagetype: {
          blunt: {
              type: Boolean
          },
          piercing: {
              type: Boolean
          },
          slashing: {
              type: Boolean
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
      equiped: {
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
      damageAttackBonus: {
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
      abilityModifier: {
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
  spells: [{
      knownSpells: [{
          name: {
              type: String,
          },
          spellTracker: {
              type: Number
          }
      }],
  }],
  feats: [{
      name: {
          type: String
      },
      known: {
          type: Boolean
      }
  }],
  abilities: [{
      name: {
          type: String
      },
      known: {
          type: Boolean
      }
  }],
  equipment: [{
      armorClassItems: [{
          Name: {
              type: String,
              required: true
          },
          Cost: {
              type: Number,
              required: false
          },
          ArmorShieldBonus: {
              type: Number,
              required: false
          },
          MaximumDexBonus: {
              type: Number,
              required: false
          },
          ArmorCheckPenalty: {
              type: Number,
              required: false
          },
          ArcanespellFailureChance: {
              type: Number,
              required: false
          },
          EquiptSpeed30: {
              type: Number,
              required: false
          },
          EquiptSpeed20: {
              type: Number,
              required: false
          },
          Weight: {
              type: Number,
              required: false
          },
          type: {
              type: String,
              required: true
          },
          description: {
              type: String,
              required: false
          }
      }],
      gear: {
          Item: {
              type: String,
              required: true
          },
          Cost: {
              type: Number,
              required: false
          },
          Weight: {
              type: Number,
              required: false
          },
          category: {
              type: String,
              required: true
          },
          description: {
              type: String,
              required: false
          }
      },
      wealth: {
          type: number
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
module.exports = mongoose.model('Armor', armorSchema);
