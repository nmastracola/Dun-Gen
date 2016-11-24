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


// [{
//     "type": "Simple Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Club",
//     "cost": 0,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": 10,
//     "weight": 3,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": ""
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Sling",
//     "cost": 0,
//     "damage": {
//         "die": [4],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": 50,
//     "weight": "",
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A sling is little more than a leather cup attached to a pair of strings. Your Strength modifier applies to damage rolls when you use a sling, just as it does for thrown weapons. You can fire, but not load, a sling with one hand. Loading a sling is a move action that requires two hands and provokes attacks of opportunity. You can hurl ordinary stones with a sling, but stones are not as dense or as round as bullets. Thus, such an attack deals damage as if the weapon were designed for a creature one size category smaller than you and you take a –1 penalty on attack rolls."
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Quarterstaff",
//     "cost": 0,
//     "damage": {
//         "die": [6, 6],
//         "number": [1, 1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 4,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "TRUE",
//         "monk": "TRUE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A quarterstaff is a simple piece of wood, about 5 feet in length"
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Dart",
//     "cost": 50,
//     "damage": {
//         "die": [4],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": 20,
//     "weight": 0.5,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "Daggers, clubs, shortspears, spears, darts, javelins, throwing axes, light hammers, tridents, shuriken, and nets are thrown weapons. The wielder applies his Strength modifier to damage dealt by thrown weapons (except for splash weapons). It is possible to throw a weapon that isn't designed to be thrown (that is, a melee weapon that doesn't have a numeric entry in the Range column on Table: Weapons), and a character who does so takes a –4 penalty on the attack roll. Throwing a light or one-handed weapon is a standard action, while throwing a two-handed weapon is a full-round action. Regardless of the type of weapon, such an attack scores a threat only on a natural roll of 20 and deals double damage on a critical hit. Such a weapon has a range increment of 10 feet."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Sai",
//     "cost": 100,
//     "damage": {
//         "die": [4],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 1,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "TRUE",
//         "double": "FALSE",
//         "monk": "TRUE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A sai is a metal spike flanked by a pair of prongs used to trap an enemy's weapon. With a sai, you get a +2 bonus on Combat Maneuver Checks to sunder an enemy's weapon. Though pointed, a sai is used primarily to bludgeon foes and to disarm weapons."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Whip",
//     "cost": 100,
//     "damage": {
//         "die": [3],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 2,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "TRUE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "TRUE",
//         "reach": "TRUE",
//         "trip": "TRUE"
//     },
//     "description": "A whip deals no damage to any creature with an armor bonus of +1 or higher or a natural armor bonus of +3 or higher. The whip is treated as a melee weapon with 15-foot reach, though you don't threaten the area into which you can make an attack. In addition, unlike most other weapons with reach, you can use it against foes anywhere within your reach (including adjacent foes). Using a whip provokes an attack of opportunity, just as if you had used a ranged weapon.You can use the Weapon Finesse feat to apply your Dexterity modifier instead of your Strength modifier to attack rolls with a whip sized for you, even though it isn't a light weapon."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Shuriken (5)",
//     "cost": 100,
//     "damage": {
//         "die": [2],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": 10,
//     "weight": 0.5,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "TRUE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A shuriken is a small piece of metal with sharpened edges, designed for throwing. A shuriken can't be used as a melee weapon. Although they are thrown weapons, shuriken are treated as ammunition for the purposes of drawing them, crafting masterwork or otherwise special versions of them, and what happens to them after they are thrown."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Hammer, light",
//     "cost": 100,
//     "damage": {
//         "die": [4],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": 20,
//     "weight": 2,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "Daggers, clubs, shortspears, spears, darts, javelins, throwing axes, light hammers, tridents, shuriken, and nets are thrown weapons. The wielder applies his Strength modifier to damage dealt by thrown weapons (except for splash weapons). It is possible to throw a weapon that isn't designed to be thrown (that is, a melee weapon that doesn't have a numeric entry in the Range column on Table: Weapons), and a character who does so takes a –4 penalty on the attack roll. Throwing a light or one-handed weapon is a standard action, while throwing a two-handed weapon is a full-round action. Regardless of the type of weapon, such an attack scores a threat only on a natural roll of 20 and deals double damage on a critical hit. Such a weapon has a range increment of 10 feet."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Sap",
//     "cost": 100,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 2,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "TRUE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": ""
// }, {
//     "type": "Simple Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Shortspear",
//     "cost": 100,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": 20,
//     "weight": 3,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A shortspear is about 3 feet in length, making it a suitable thrown weapon."
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Javelin",
//     "cost": 100,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": 30,
//     "weight": 2,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A javelin is a thin throwing spear. Since it is not designed for melee, you are treated as nonproficient with it and take a –4 penalty on attack rolls if you use a javelin as a melee weapon."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Kama",
//     "cost": 200,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 2,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "TRUE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "TRUE"
//     },
//     "description": "Similar to a sickle, a kama is a short, curved blade attached to a simple handle."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Nunchaku",
//     "cost": 200,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 2,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "TRUE",
//         "double": "FALSE",
//         "monk": "TRUE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A nunchaku is made up of two wooden or metal bars connected by a small length of rope or chain."
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Dagger",
//     "cost": 200,
//     "damage": {
//         "die": [4],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 19,
//         "multiplier": 2
//     },
//     "range": 10,
//     "weight": 1,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A dagger has a blade that is about 1 foot in length. You get a +2 bonus on Sleight of Hand skill checks made to conceal a dagger on your body (see Using Skills)."
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Dagger, punching",
//     "cost": 200,
//     "damage": {
//         "die": [4],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 1,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A punching dagger's blade is attached to a horizontal handle that projects out from the fist when held."
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Blowgun",
//     "cost": 200,
//     "damage": {
//         "die": [2],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": 20,
//     "weight": 1,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "Blowguns are generally used to deliver debilitating (but rarely fatal) poisons from a distance. They are nearly silent when fired. For a list of appropriate poisons, see Poison."
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Spear",
//     "cost": 200,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": 20,
//     "weight": 6,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "TRUE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A spear is 5 feet in length and can be thrown."
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Unarmed Attacks",
//     "name": "Gauntlet",
//     "cost": 200,
//     "damage": {
//         "die": [3],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 1,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "This metal glove lets you deal lethal damage rather than nonlethal damage with unarmed strikes. A strike with a gauntlet is otherwise considered an unarmed attack. The cost and weight given are for a single gauntlet. Medium and heavy armors (except breastplate) come with gauntlets. Your opponent cannot use a disarm action to disarm you of gauntlets."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Siangham",
//     "cost": 300,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 1,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "TRUE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "This weapon is a handheld shaft fitted with a pointed tip for stabbing foes."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Pick, light",
//     "cost": 400,
//     "damage": {
//         "die": [4],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 4
//     },
//     "range": "",
//     "weight": 3,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": ""
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Bolas",
//     "cost": 500,
//     "damage": {
//         "die": [4],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": 10,
//     "weight": 2,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "TRUE",
//         "reach": "FALSE",
//         "trip": "TRUE"
//     },
//     "description": "A bolas is a pair of weights, connected by a thin rope or cord. You can use this weapon to make a ranged trip attack against an opponent. You can't be tripped during your own trip attempt when using a bolas."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Greatclub",
//     "cost": 500,
//     "damage": {
//         "die": [10],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 8,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": ""
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Gauntlet, spiked",
//     "cost": 500,
//     "damage": {
//         "die": [4],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 1,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "The cost and weight given are for a single gauntlet. An attack with a spiked gauntlet is considered an armed attack. Your opponent cannot use a disarm action to disarm you of spiked gauntlets."
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Mace, light",
//     "cost": 500,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 4,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A mace is made up of an ornate metal head attached to a simple wooden or metal shaft."
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Longspear",
//     "cost": 500,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 9,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "TRUE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "TRUE",
//         "trip": "FALSE"
//     },
//     "description": "A longspear is about 8 feet in length."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Handaxe",
//     "cost": 600,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 3,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": ""
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Sickle",
//     "cost": 600,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 2,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "TRUE"
//     },
//     "description": "curved blade attached to a simple handle."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Axe, throwing",
//     "cost": 800,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": 10,
//     "weight": 2,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "Daggers, clubs, shortspears, spears, darts, javelins, throwing axes, light hammers, tridents, shuriken, and nets are thrown weapons. The wielder applies his Strength modifier to damage dealt by thrown weapons (except for splash weapons). It is possible to throw a weapon that isn't designed to be thrown (that is, a melee weapon that doesn't have a numeric entry in the Range column on Table: Weapons), and a character who does so takes a –4 penalty on the attack roll. Throwing a light or one-handed weapon is a standard action, while throwing a two-handed weapon is a full-round action. Regardless of the type of weapon, such an attack scores a threat only on a natural roll of 20 and deals double damage on a critical hit. Such a weapon has a range increment of 10 feet."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Kukri",
//     "cost": 800,
//     "damage": {
//         "die": [4],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 18,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 2,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A kukri is a curved blade, about 1 foot in length."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Flail",
//     "cost": 800,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 5,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "TRUE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "TRUE"
//     },
//     "description": "A flail consists of a spiked metal ball, connected to a handle by a sturdy chain."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Pick, heavy",
//     "cost": 800,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 4
//     },
//     "range": "",
//     "weight": 6,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": ""
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Glaive",
//     "cost": 800,
//     "damage": {
//         "die": [10],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 10,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "TRUE",
//         "trip": "FALSE"
//     },
//     "description": "A glaive is a simple blade, mounted to the end of a pole about 7 feet in length."
// }, {
//     "type": "Simple Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Morningstar",
//     "cost": 800,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 6,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A morningstar is a spiked metal ball, affixed to the top of a long handle."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Guisarme",
//     "cost": 900,
//     "damage": {
//         "die": [4],
//         "number": [2]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 12,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "TRUE",
//         "trip": "TRUE"
//     },
//     "description": "A guisarme is an 8-foot-long shaft with a blade and a hook mounted at the tip."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Sword, short",
//     "cost": 1000,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 19,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 2,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "This sword is about 2 feet in length."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Battleaxe",
//     "cost": 1000,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 6,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": ""
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Halberd",
//     "cost": 1000,
//     "damage": {
//         "die": [10],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 12,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "TRUE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "TRUE"
//     },
//     "description": "A halberd is similar to a 5-foot-long spear, but it also has a small, axe-like head mounted near the tip."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Lance",
//     "cost": 1000,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 10,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "TRUE",
//         "trip": "FALSE"
//     },
//     "description": "A lance deals double damage when used from the back of a charging mount. While mounted, you can wield a lance with one hand."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Ranseur",
//     "cost": 1000,
//     "damage": {
//         "die": [4],
//         "number": [2]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 12,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "TRUE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "TRUE",
//         "trip": "FALSE"
//     },
//     "description": "Similar in appearance to a trident, a ranseur has a single spear at its tip, flanked by a pair of short, curving blades."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Warhammer",
//     "cost": 1200,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 5,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": ""
// }, {
//     "type": "Simple Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Mace, heavy",
//     "cost": 1200,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 8,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A heavy mace has a larger head and a longer handle than a normal mace."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Longsword",
//     "cost": 1500,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 19,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 4,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "This sword is about 3-1/2 feet in length."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Scimitar",
//     "cost": 1500,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 18,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 4,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": ""
// }, {
//     "type": "Martial Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Trident",
//     "cost": 1500,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": 10,
//     "weight": 4,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "TRUE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A trident has three metal prongs at end of a 4-foot-long shaft. This weapon can be thrown."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Flail, heavy",
//     "cost": 1500,
//     "damage": {
//         "die": [10],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 19,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 10,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "TRUE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "TRUE"
//     },
//     "description": "Similar to a flail, a heavy flail has a larger metal ball and a longer handle."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Scythe",
//     "cost": 1800,
//     "damage": {
//         "die": [4],
//         "number": [2]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 4
//     },
//     "range": "",
//     "weight": 10,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "TRUE"
//     },
//     "description": ""
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Net",
//     "cost": 2000,
//     "damage": {
//         "die": [],
//         "number": []
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 1
//     },
//     "range": 10,
//     "weight": 6,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A net is used to entangle enemies. When you throw a net, you make a ranged touch attack against your target. A net's maximum range is 10 feet. If you hit, the target is entangled. An entangled creature takes a –2 penalty on attack rolls and a –4 penalty on Dexterity, can move at only half speed, and cannot charge or run. If you control the trailing rope by succeeding on an opposed Strength check while holding it, the entangled creature can move only within the limits that the rope allows. If the entangled creature attempts to cast a spell, it must make a concentration check with a DC of 15 + the spell's level or be unable to cast the spell. An entangled creature can escape with a DC 20 Escape Artist check (a full-round action). The net has 5 hit points and can be burst with a DC 25 Strength check (also a full-round action). A net is useful only against creatures within one size category of you. A net must be folded to be thrown effectively. The first time you throw your net in a fight, you make a normal ranged touch attack roll. After the net is unfolded, you take a –4 penalty on attack rolls with it. It takes 2 rounds for a proficient user to fold a net and twice that long for a nonproficient one to do so."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Sling staff, halfling",
//     "cost": 2000,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": 80,
//     "weight": 3,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "Made from a specially designed sling attached to a short club, a halfling sling staff can be used by a proficient wielder to devastating effect. Your Strength modifier applies to damage rolls when you use a halfling sling staff, just as it does for thrown weapons. You can fire, but not load, a halfling sling staff with one hand. Loading a halfling sling staff is a move action that requires two hands and provokes attacks of opportunity. You can hurl ordinary stones with a halfling sling staff, but stones are not as dense or as round as bullets. Thus, such an attack deals damage as if the weapon were designed for a creature one size category smaller than you and you take a –1 penalty on attack rolls. A halfling sling staff can be used as a simple weapon that deals bludgeoning damage equal to that of a club of its size. Halflings treat halfling sling staves as martial weapons."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Hammer, gnome hooked",
//     "cost": 2000,
//     "damage": {
//         "die": [8, 6],
//         "number": [1, 1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 6,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "TRUE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "TRUE"
//     },
//     "description": "A gnome hooked hammer is a double weaponan ingenious tool with a hammer head at one end of its haft and a long, curved pick at the other. The hammer's blunt head is a bludgeoning weapon that deals 1d6 points of damage (crit ×3). Its hook is a piercing weapon that deals 1d4 points of damage (crit ×4). You can use either head as the primary weapon. Gnomes treat hooked hammers as martial weapons."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Rapier",
//     "cost": 2000,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 18,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 2,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "You can use the Weapon Finesse feat to apply your Dexterity modifier instead of your Strength modifier to attack rolls with a rapier sized for you, even though it isn't a light weapon. You can't wield a rapier in two hands in order to apply 1-1/2 times your Strength bonus to damage."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Greataxe",
//     "cost": 2000,
//     "damage": {
//         "die": [12],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 12,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": ""
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Light Melee Weapons",
//     "name": "Starknife",
//     "cost": 2400,
//     "damage": {
//         "die": [4],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": 20,
//     "weight": 3,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "From a central metal ring, four tapering metal blades extend like points on a compass rose. A wielder can stab with the starknife or throw it."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Chain, spiked",
//     "cost": 2500,
//     "damage": {
//         "die": [4],
//         "number": [2]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 10,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "TRUE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "TRUE"
//     },
//     "description": "A spiked chain is about 4 feet in length, covered in wicked barbs. You can use the Weapon Finesse feat to apply your Dexterity modifier instead of your Strength modifier to attack rolls with a spiked chain sized for you, even though it isn't a light weapon."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Waraxe, dwarven",
//     "cost": 3000,
//     "damage": {
//         "die": [10],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 8,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A dwarven waraxe has a large, ornate head mounted to a thick handle, making it too large to use in one hand without special training; thus, it is an exotic weapon. A Medium character can use a dwarven waraxe two-handed as a martial weapon, or a Large creature can use it one-handed in the same way. A dwarf treats a dwarven waraxe as a martial weapon even when using it in one hand."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Shortbow",
//     "cost": 3000,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": 60,
//     "weight": 2,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A shortbow is made up of one piece of wood, about 3 feet in length. You need two hands to use a bow, regardless of its size. You can use a shortbow while mounted. If you have a penalty for low Strength, apply it to damage rolls when you use a shortbow. If you have a bonus for high Strength, you can apply it to damage rolls when you use a composite shortbow (see below), but not a regular shortbow."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "One-Handed Melee Weapons",
//     "name": "Sword, bastard",
//     "cost": 3500,
//     "damage": {
//         "die": [10],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 19,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 6,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A bastard sword is about 4 feet in length, making it too large to use in one hand without special training; thus, it is an exotic weapon. A character can use a bastard sword two-handed as a martial weapon."
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Crossbow, light",
//     "cost": 3500,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 19,
//         "multiplier": 2
//     },
//     "range": 80,
//     "weight": 4,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "You draw a light crossbow back by pulling a lever. Loading a light crossbow is a move action that provokes attacks of opportunity. Normally, operating a light crossbow requires two hands. However, you can shoot, but not load, a light crossbow with one hand at a –2 penalty on attack rolls. You can shoot a light crossbow with each hand, but you take a penalty on attack rolls as if attacking with two light weapons. This penalty is cumulative with the penalty for one-handed firing."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Urgrosh, dwarven",
//     "cost": 5000,
//     "damage": {
//         "die": [8, 6],
//         "number": [1, 1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 12,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "TRUE",
//         "disarm": "FALSE",
//         "double": "TRUE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A dwarven urgrosh is a double weaponan axe head and a spear point on opposite ends of a long haft. The urgrosh's axe head is a slashing weapon that deals 1d8 points of damage. Its spear head is a piercing weapon that deals 1d6 points of damage. You can use either head as the primary weapon. The other becomes the off-hand weapon. If you use an urgrosh against a charging character, the spear head is the part of the weapon that deals damage. Dwarves treat dwarven urgroshes as martial weapons."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Greatsword",
//     "cost": 5000,
//     "damage": {
//         "die": [6],
//         "number": [2]
//     },
//     "critical": {
//         "threshold": 19,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 8,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "This immense two-handed sword is about 5 feet in length."
// }, {
//     "type": "Simple Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Crossbow, heavy",
//     "cost": 5000,
//     "damage": {
//         "die": [10],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 19,
//         "multiplier": 2
//     },
//     "range": 120,
//     "weight": 8,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "You draw a heavy crossbow back by turning a small winch. Loading a heavy crossbow is a full-round action that provokes attacks of opportunity. Normally, operating a heavy crossbow requires two hands. However, you can shoot, but not load, a heavy crossbow with one hand at a –4 penalty on attack rolls. You can shoot a heavy crossbow with each hand, but you take a penalty on attack rolls as if attacking with two one-handed weapons. This penalty is cumulative with the penalty for one-handed firing."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Axe, orc double",
//     "cost": 6000,
//     "damage": {
//         "die": [8, 8],
//         "number": [1, 1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": "",
//     "weight": 15,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "TRUE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A cruel weapon with blades placed at opposite ends of a long haft, an orc double axe is a double weapon."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Longbow",
//     "cost": 7500,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": 100,
//     "weight": 3,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "At almost 5 feet in height, a longbow is made up of one solid piece of carefully curved wood. You need two hands to use a bow, regardless of its size. A longbow is too unwieldy to use while you are mounted. If you have a penalty for low Strength, apply it to damage rolls when you use a longbow. If you have a Strength bonus, you can apply it to damage rolls when you use a composite longbow (see below), but not when you use a regular longbow."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Shortbow, composite",
//     "cost": 7500,
//     "damage": {
//         "die": [6],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": 70,
//     "weight": 2,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "You need at least two hands to use a bow, regardless of its size. You can use a composite shortbow while mounted. All composite bows are made with a particular strength rating (that is, each requires a minimum Strength modifier to use with proficiency). If your Strength bonus is lower than the strength rating of the composite bow, you can't effectively use it, so you take a –2 penalty on attacks with it. The default composite shortbow requires a Strength modifier of +0 or higher to use with proficiency. A composite shortbow can be made with a high strength rating to take advantage of an above-average Strength score; this feature allows you to add your Strength bonus to damage, up to the maximum bonus indicated for the bow. Each point of Strength bonus granted by the bow adds 75 gp to its cost. If you have a penalty for low Strength, apply it to damage rolls when you use a composite shortbow. For purposes of Weapon Proficiency, Weapon Focus, and similar feats, a composite shortbow is treated as if it were a shortbow."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Falchion",
//     "cost": 7500,
//     "damage": {
//         "die": [4],
//         "number": [2]
//     },
//     "critical": {
//         "threshold": 18,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 8,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": ""
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Curve blade, elven",
//     "cost": 8000,
//     "damage": {
//         "die": [10],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 18,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 7,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "Essentially a longer version of a scimitar, but with a thinner blade, the elven curve blade is exceptionally rare. You receive a +2 circumstance bonus to your Combat Maneuver Defense whenever a foe attempts to sunder your elven curve blade due to its flexible metal. You can use the Weapon Finesse feat to apply your Dexterity modifier instead of your Strength modifier to attack rolls with an elven curve blade sized for you, even though it isn't a light weapon."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Flail, dire",
//     "cost": 9000,
//     "damage": {
//         "die": [8, 8],
//         "number": [1, 1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 10,
//     "damagetype": {
//         "blunt": "TRUE",
//         "piercing": "FALSE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "TRUE",
//         "double": "TRUE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "TRUE"
//     },
//     "description": "A dire flail consists of two spheres of spiked iron dangling from chains at opposite ends of a long haft."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Crossbow, hand",
//     "cost": 10000,
//     "damage": {
//         "die": [4],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 19,
//         "multiplier": 2
//     },
//     "range": 30,
//     "weight": 2,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "You can draw a hand crossbow back by hand. Loading a hand crossbow is a move action that provokes attacks of opportunity. You can shoot, but not load, a hand crossbow with one hand at no penalty. You can shoot a hand crossbow with each hand, but you take a penalty on attack rolls as if attacking with two light weapons."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Two-Handed Melee Weapons",
//     "name": "Sword, two-bladed",
//     "cost": 10000,
//     "damage": {
//         "die": [8, 8],
//         "number": [1, 1]
//     },
//     "critical": {
//         "threshold": 19,
//         "multiplier": 2
//     },
//     "range": "",
//     "weight": 10,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "FALSE",
//         "slashing": "TRUE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "TRUE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "A two-bladed sword is a double weapontwin blades extend from either side of a central, short haft, allowing the wielder to attack with graceful but deadly flourishes."
// }, {
//     "type": "Martial Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Longbow, composite",
//     "cost": 10000,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 20,
//         "multiplier": 3
//     },
//     "range": 110,
//     "weight": 3,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "You need at least two hands to use a bow, regardless of its size. You can use a composite longbow while mounted. All composite bows are made with a particular strength rating (that is, each requires a minimum Strength modifier to use with proficiency). If your Strength bonus is less than the strength rating of the composite bow, you can't effectively use it, so you take a –2 penalty on attacks with it. The default composite longbow requires a Strength modifier of +0 or higher to use with proficiency. A composite longbow can be made with a high strength rating to take advantage of an above-average Strength score; this feature allows you to add your Strength bonus to damage, up to the maximum bonus indicated for the bow. Each point of Strength bonus granted by the bow adds 100 gp to its cost. If you have a penalty for low Strength, apply it to damage rolls when you use a composite longbow. For purposes of Weapon Proficiency and similar feats, a composite longbow is treated as if it were a longbow."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Crossbow, repeating light",
//     "cost": 25000,
//     "damage": {
//         "die": [8],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 19,
//         "multiplier": 2
//     },
//     "range": 80,
//     "weight": 6,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "The repeating crossbow (whether heavy or light) holds 5 crossbow bolts. As long as it holds bolts, you can reload it by pulling the reloading lever (a free action). Loading a new case of 5 bolts is a full-round action that provokes attacks of opportunity. You can fire a repeating crossbow with one hand or fire a repeating crossbow in each hand in the same manner as you would a normal crossbow of the same size. However, you must fire the weapon with two hands in order to use the reloading lever, and you must use two hands to load a new case of bolts."
// }, {
//     "type": "Exotic Weapons",
//     "subtype": "Ranged Weapons",
//     "name": "Crossbow, repeating heavy",
//     "cost": 40000,
//     "damage": {
//         "die": [10],
//         "number": [1]
//     },
//     "critical": {
//         "threshold": 19,
//         "multiplier": 2
//     },
//     "range": 120,
//     "weight": 12,
//     "damagetype": {
//         "blunt": "FALSE",
//         "piercing": "TRUE",
//         "slashing": "FALSE"
//     },
//     "special": {
//         "brace": "FALSE",
//         "disarm": "FALSE",
//         "double": "FALSE",
//         "monk": "FALSE",
//         "nonlethal": "FALSE",
//         "reach": "FALSE",
//         "trip": "FALSE"
//     },
//     "description": "The repeating crossbow (whether heavy or light) holds 5 crossbow bolts. As long as it holds bolts, you can reload it by pulling the reloading lever (a free action). Loading a new case of 5 bolts is a full-round action that provokes attacks of opportunity. You can fire a repeating crossbow with one hand or fire a repeating crossbow in each hand in the same manner as you would a normal crossbow of the same size. However, you must fire the weapon with two hands in order to use the reloading lever, and you must use two hands to load a new case of bolts."
// }]
