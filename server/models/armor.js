// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var armorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
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
    type:  {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Armor', armorSchema);

// [
//   {
//     "Name": "Banded mail",
//     "Cost": 25000,
//     "ArmorShieldBonus": 7,
//     "MaximumDexBonus": 1,
//     "ArmorCheckPenalty": 6,
//     "ArcanespellFailureChance": 35,
//     "EquiptSpeed30": 20,
//     "EquiptSpeed20": 15,
//     "Weight": 35,
//     "type": "Heavy",
//     "Description": "Banded Mail: Banded mail is made up of overlapping strips of metal, fastened to a leather backing. The suit includes gauntlets."
//   },
//   {
//     "Name": "Breastplate",
//     "Cost": 20000,
//     "ArmorShieldBonus": 6,
//     "MaximumDexBonus": 3,
//     "ArmorCheckPenalty": 4,
//     "ArcanespellFailureChance": 25,
//     "EquiptSpeed30": 20,
//     "EquiptSpeed20": 15,
//     "Weight": 30,
//     "type": "Medium",
//     "Description": "Breastplate: Covering only the torso, a breastplate is made up of a single piece of sculpted metal."
//   },
//   {
//     "Name": "Buckler",
//     "Cost": 500,
//     "ArmorShieldBonus": 1,
//     "MaximumDexBonus": "",
//     "ArmorCheckPenalty": 1,
//     "ArcanespellFailureChance": 5,
//     "EquiptSpeed30": "NULL",
//     "EquiptSpeed20": "NULL",
//     "Weight": 5,
//     "type": "Shield",
//     "Description": "Buckler: This small metal shield is worn strapped to your forearm. You can use a bow or crossbow without penalty while carrying it. You can also use your shield arm to wield a weapon (whether you are using an off-hand weapon or using your off hand to help wield a two-handed weapon), but you take a –1 penalty on attack rolls while doing so. This penalty stacks with those that may apply for fighting with your off hand and for fighting with two weapons. In any case, if you use a weapon in your off hand, you lose the buckler's AC bonus until your next turn. You can cast a spell with somatic components using your shield arm, but you lose the buckler's AC bonus until your next turn. You can't make a shield bash with a buckler."
//   },
//   {
//     "Name": "Chain shirt",
//     "Cost": 10000,
//     "ArmorShieldBonus": 4,
//     "MaximumDexBonus": 4,
//     "ArmorCheckPenalty": 2,
//     "ArcanespellFailureChance": 20,
//     "EquiptSpeed30": 30,
//     "EquiptSpeed20": 20,
//     "Weight": 25,
//     "type": "Light",
//     "Description": "Chain Shirt: Covering the torso, this shirt is made up of thousands of interlocking metal rings."
//   },
//   {
//     "Name": "Chainmail",
//     "Cost": 15000,
//     "ArmorShieldBonus": 6,
//     "MaximumDexBonus": 2,
//     "ArmorCheckPenalty": 5,
//     "ArcanespellFailureChance": 30,
//     "EquiptSpeed30": 20,
//     "EquiptSpeed20": 15,
//     "Weight": 40,
//     "type": "Medium",
//     "Description": "Chainmail: Unlike a chain shirt, chainmail covers the legs and arms of the wearer. The suit includes gauntlets."
//   },
//   {
//     "Name": "Full plate",
//     "Cost": "150,000",
//     "ArmorShieldBonus": 9,
//     "MaximumDexBonus": 1,
//     "ArmorCheckPenalty": 6,
//     "ArcanespellFailureChance": 35,
//     "EquiptSpeed30": 20,
//     "EquiptSpeed20": 15,
//     "Weight": 50,
//     "type": "Heavy",
//     "Description": "Full Plate: This metal suit includes gauntlets, heavy leather boots, a visored helmet, and a thick layer of padding that is worn underneath the armor. Each suit of full plate must be individually fitted to its owner by a master armorsmith, although a captured suit can be resized to fit a new owner at a cost of 200 to 800 (2d4 × 100) gold pieces."
//   },
//   {
//     "Name": "Half-plate",
//     "Cost": 60000,
//     "ArmorShieldBonus": 8,
//     "MaximumDexBonus": 0,
//     "ArmorCheckPenalty": 7,
//     "ArcanespellFailureChance": 40,
//     "EquiptSpeed30": 20,
//     "EquiptSpeed20": 15,
//     "Weight": 50,
//     "type": "Heavy",
//     "Description": "Half-Plate: Combining elements of full plate and chainmail, half-plate includes gauntlets and a helm."
//   },
//   {
//     "Name": "Hide",
//     "Cost": 1500,
//     "ArmorShieldBonus": 4,
//     "MaximumDexBonus": 4,
//     "ArmorCheckPenalty": 3,
//     "ArcanespellFailureChance": 20,
//     "EquiptSpeed30": 20,
//     "EquiptSpeed20": 15,
//     "Weight": 25,
//     "type": "Medium",
//     "Description": "Hide: Hide armor is made up of the tanned and preserved skin of any thick-hided beast."
//   },
//   {
//     "Name": "Leather",
//     "Cost": 1000,
//     "ArmorShieldBonus": 2,
//     "MaximumDexBonus": 6,
//     "ArmorCheckPenalty": 0,
//     "ArcanespellFailureChance": 10,
//     "EquiptSpeed30": 30,
//     "EquiptSpeed20": 20,
//     "Weight": 15,
//     "type": "Light",
//     "Description": "Leather: Leather armor is made up of pieces of hard boiled leather carefully sewn together."
//   },
//   {
//     "Name": "Padded",
//     "Cost": 500,
//     "ArmorShieldBonus": 1,
//     "MaximumDexBonus": 8,
//     "ArmorCheckPenalty": 0,
//     "ArcanespellFailureChance": 5,
//     "EquiptSpeed30": 30,
//     "EquiptSpeed20": 20,
//     "Weight": 10,
//     "type": "Light",
//     "Description": "Padded: Little more than heavy, quilted cloth, this armor provides only the most basic protection."
//   },
//   {
//     "Name": "Scale mail",
//     "Cost": 5000,
//     "ArmorShieldBonus": 5,
//     "MaximumDexBonus": 3,
//     "ArmorCheckPenalty": 4,
//     "ArcanespellFailureChance": 25,
//     "EquiptSpeed30": 20,
//     "EquiptSpeed20": 15,
//     "Weight": 30,
//     "type": "Medium",
//     "Description": "Scale Mail: Scale mail is made up of dozens of small overlapping metal plates. The suit includes gauntlets."
//   },
//   {
//     "Name": "Shield, tower",
//     "Cost": 3000,
//     "ArmorShieldBonus": 43,
//     "MaximumDexBonus": 2,
//     "ArmorCheckPenalty": 10,
//     "ArcanespellFailureChance": 50,
//     "EquiptSpeed30": "NULL",
//     "EquiptSpeed20": "NULL",
//     "Weight": 45,
//     "type": "Shield",
//     "Description": "Shield, Tower: This massive wooden shield is nearly as tall as you are. In most situations, it provides the indicated shield bonus to your AC. As a standard action, however, you can use a tower shield to grant you total cover until the beginning of your next turn. When using a tower shield in this way, you must choose one edge of your space. That edge is treated as a solid wall for attacks targeting you only. You gain total cover for attacks that pass through this edge and no cover for attacks that do not pass through this edge (see Combat). The shield does not, however, provide cover against targeted spells; a spellcaster can cast a spell on you by targeting the shield you are holding. You cannot bash with a tower shield, nor can you use your shield hand for anything else. When employing a tower shield in combat, you take a –2 penalty on attack rolls because of the shield's encumbrance."
//   },
//   {
//     "Name": "Splint mail",
//     "Cost": 20000,
//     "ArmorShieldBonus": 7,
//     "MaximumDexBonus": 0,
//     "ArmorCheckPenalty": 7,
//     "ArcanespellFailureChance": 40,
//     "EquiptSpeed30": 20,
//     "EquiptSpeed20": 15,
//     "Weight": 45,
//     "type": "Heavy",
//     "Description": "Splint Mail: Splint mail is made up of metal strips, like banded mail. The suit includes gauntlets."
//   },
//   {
//     "Name": "Studded leather",
//     "Cost": 2500,
//     "ArmorShieldBonus": 3,
//     "MaximumDexBonus": 5,
//     "ArmorCheckPenalty": 1,
//     "ArcanespellFailureChance": 15,
//     "EquiptSpeed30": 30,
//     "EquiptSpeed20": 20,
//     "Weight": 20,
//     "type": "Light",
//     "Description": "Studded Leather: Similar to leather armor, this suit is reinforced with small metal studs."
//   }
// ]
