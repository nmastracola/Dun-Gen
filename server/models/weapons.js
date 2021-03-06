// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var weaponsSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    subtype: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: false
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
    range: {
        type: Number,
        required: false
    },
    weight: {
        type: Number,
        required: false
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
    },
    description: {
        type: String,
        required: false
    }
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Weapons', weaponsSchema);
