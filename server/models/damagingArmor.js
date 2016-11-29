// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var damagingArmorSchema = mongoose.Schema({
    Type: {
        type: String,
        required: true
    },
    SubType: {
        type: String,
        required: true
    },
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
    ArmorType: {
        type: String,
        required: true
    },
    damage: {
        die: [{
            type: Number,
            required: false
        }],
        number: [{
            type: Number,
            required: false
        }]
    },
    critical: {
        threshold: {
            type: Number,
            required: false
        },
        multiplier: {
            type: Number,
            required: false
        }
    },
    damagetype: {
        blunt: {
            type: Boolean,
            required: true
        },
        piercing: {
            type: Boolean,
            required: true
        },
        slashing: {
            type: Boolean,
            required: true
        }
    },
    special: {
        brace: {
            type: Boolean,
            required: true
        },
        disarm: {
            type: Boolean,
            required: true
        },
        double: {
            type: Boolean,
            required: true
        },
        monk: {
            type: Boolean,
            required: true
        },
        nonlethal: {
            type: Boolean,
            required: true
        },
        reach: {
            type: Boolean,
            required: true
        },
        trip: {
            type: Boolean,
            required: true
        }
    }
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('DamagingArmor', damagingArmorSchema);
