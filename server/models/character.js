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
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Armor', armorSchema);
