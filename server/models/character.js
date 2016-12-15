// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
var objectID = mongoose.Schema.Types.ObjectId;
// DEFINE SCHEMA
// ============================================================
var characterSchema = mongoose.Schema({
  static: {
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
      gender: {
        type: String
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
      },
      baseAttackBonus: {
        type: Number,
        required: true
      }
  },
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
          type: Number,
          required: true
      },
      fortitudeMagicModifier: {
          type: Number
      },
      fortitudeMiscellaneousModifier: {
          type: Number
      },
      fortitudeTempModifier: {
          type: Number
      },
      reflexBaseSave: {
          type: Number,
          required: true
      },
      reflexMagicModifier: {
          type: Number
      },
      reflexMiscellaneousModifier: {
          type: Number
      },
      reflexTempModifier: {
          type: Number
      },
      willBaseSave: {
          type: Number,
          required: true
      },
      willMagicModifier: {
          type: Number
      },
      willMiscellaneousModifier: {
          type: Number
      },
      willTempModifier: {
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
          baseSpeed: {
              type: Number
          },
          baseSpeedMod: {
              type: Number
          },
          flySpeed: {
              type: Number
          },
          flySpeedMod: {
              type: Number
          },
          swimSpeed: {
              type: Number
          },
          swimSpeedMod: {
              type: Number
          },
          climbSpeed: {
              type: Number
          },
          climbSpeedMod: {
              type: Number
          },
          burrowSpeed: {
              type: Number
          },
          burrowSpeedMod: {
              type: Number
          },
          miscSpeedMod: {
              type: Number
          }
      }
  },
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
      miscellaneousModifier: {
          type: Number
      },
      total: {
          type: Number,
          required: true
      },
      useUntrained: {
          type: Boolean,
          required: true
      },
      armorCheck: {
          type: Boolean,
          required: true
      },
      description: {
          type: String
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
          Name: {
              type: String
          },
          Cost: {
              type: Number
          },
          ArmorShieldBonus: {
              type: Number
          },
          MaximumDexBonus: {
              type: Number
          },
          ArmorCheckPenalty: {
              type: Number
          },
          ArcanespellFailureChance: {
              type: Number
          },
          EquipSpeed30: {
              type: Number
          },
          EquipSpeed20: {
              type: Number
          },
          Weight: {
              type: Number
          },
          type: {
              type: String
          },
          description: {
              type: String
          }
      }],
      gear: [{
          Item: {
              type: String
          },
          Cost: {
              type: Number
          },
          Weight: {
              type: Number
          },
          category: {
              type: String
          },
          description: {
              type: String
          }
      }],
      wealth: {
          type: Number
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
  }],
  customization: {
      name: {
          type: String
      },
      homeland: {
          type: String
      },
      deity: {
          type: String
      },
      age: {
          type: String
      },
      height: {
          type: String
      },
      weight: {
          type: String
      },
      hair: {
          type: String
      },
      eyes: {
          type: String
      },
      misc: {
          type: String
      },
      characterDescription: {
          type: String
      },
      biography: {
          type: String
      }

  },
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
