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
            type: String
        },
        characterName: {
            type: String
        },
        campaign: {
            type: String
        },
        race: {
            type: String
        },
        classes: [{
            class: {
                type: String
            },
            level: {
                type: String
            }
        }],
        alignment: {
            type: String
        },
        experiance: {
            type: String
        }
    }],
    core: [{
        strength: {
            type: String
        },
        strengthModifier: {
            type: String
        },
        dexterity: {
            type: String
        },
        dexterityModifier: {
            type: String
        },
        constitution: {
            type: String
        },
        constitutionModifier: {
            type: String
        },
        intelligence: {
            type: String
        },
        intelligenceModifier: {
            type: String
        },
        wisdom: {
            type: String
        },
        wisdomModifier: {
            type: String
        },
        charisma: {
            type: String
        },
        charismaModifier: {
            type: String
        },
        armorClassModifier: {
            type: String
        },
        initiativeModifier: {
            type: String
        },
        speedModifier: {
            type: String
        },
        charismaModifier: {
            type: String
        },
        fortitudeMacigModifier: {
            type: String
        },
        fortitudeMiscellaneousModifier: {
            type: String
        },
        reflexMacigModifier: {
            type: String
        },
        reflexMiscellaneousModifier: {
            type: String
        },
        willMacigModifier: {
            type: String
        },
        willMiscellaneousModifier: {
            type: String
        },
        currentHitPoints: {
            type: String
        },
        maxHitPoints: {
            type: String
        },
        HitPointsModifier: {
            type: String
        },
        wounds: {
            type: String
        },
        speeds: [{
            movementType: {
                type: String
            },
            movementSpeed: {
                type: String
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
            type: String
        },
        classSkill: {
            type: Boolean
        },
        ranks: {
            type: Number
        },
        abilityModifier: {
            type: Number
        },
        miscellaneousModifier: {
            type: Number
        },
        total: {
            type: Number
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
            EquiptSpeed30: {
                type: Number
            },
            EquiptSpeed20: {
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
        gear: {
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
=======
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
