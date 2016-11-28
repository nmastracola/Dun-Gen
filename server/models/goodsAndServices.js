// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');
// DEFINE SCHEMA
// ============================================================
var weaponsSchema = mongoose.Schema({
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
});
// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Weapons', weaponsSchema);
//
// [
//   {
//     "Item": "Arrows (20)",
//     "Cost": 100,
//     "Weight": 3,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Bolts (10)",
//     "Cost": 100,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Bullets, sling (10)",
//     "Cost": 10,
//     "Weight": 5,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Darts (10)",
//     "Cost": 50,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Armor spikes",
//     "Cost": 5000,
//     "Weight": 10,
//     "category": "Adventuring Gear",
//     "description": "Armor spikes deal extra piercing damage (see “spiked armor” on Table: Weapons) on a successful grapple attack. The spikes count as a martial weapon. If you are not proficient with them, you take a –4 penalty on grapple checks when you try to use them. You can also make a regular melee attack (or off-hand attack) with the spikes, and they count as a light weapon in this case. (You can't also make an attack with Armor spikes if you have already made an attack with another off-hand weapon, and vice versa.) An enhancement bonus to a suit of armor does not improve the spikes' effectiveness, but the spikes can be made into magic weapons in their own right."
//   },
//   {
//     "Item": "Shield spikes",
//     "Cost": 1000,
//     "Weight": 5,
//     "category": "Adventuring Gear",
//     "description": "These spikes turn a shield into a martial piercing weapon and increase the damage dealt by a shield bash as if the shield were designed for a creature one size category larger than you (see “spiked shields” on Table: Weapons). You can't put spikes on a buckler or a tower shield. Otherwise, attacking with a spiked shield is like making a shield bash attack. An enhancement bonus on a spiked shield does not improve the effectiveness of a shield bash made with it, but a spiked shield can be made into a magic weapon in its own right."
//   },
//   {
//     "Item": "Backpack (empty)",
//     "Cost": 200,
//     "Weight": 2,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Barrel (empty)",
//     "Cost": 200,
//     "Weight": 30,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Basket (empty)",
//     "Cost": 40,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Bedroll",
//     "Cost": 10,
//     "Weight": 5,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Bell",
//     "Cost": 100,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Blanket, winter",
//     "Cost": 50,
//     "Weight": 3,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Block and tackle",
//     "Cost": 500,
//     "Weight": 5,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Bottle, glass",
//     "Cost": 200,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Bucket (empty)",
//     "Cost": 50,
//     "Weight": 2,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Caltrops",
//     "Cost": 100,
//     "Weight": 2,
//     "category": "Adventuring Gear",
//     "description": "A caltrop is a four-pronged metal spike crafted so that one prong faces up no matter how the caltrop comes to rest. You scatter caltrops on the ground in the hope that your enemies step on them or are at least forced to slow down to avoid them. One 2-pound bag of caltrops covers an area 5 feet square. Each time a creature moves into an area covered by caltrops (or spends a round fighting while standing in such an area), it runs the risk of stepping on one. Make an attack roll for the caltrops (base attack bonus +0) against the creature. For this attack, the creature's shield, armor, and deflection bonuses do not count. If the creature is wearing shoes or other footwear, it gets a +2 armor bonus to AC. If the attack succeeds, the creature has stepped on a caltrop. The caltrop deals 1 point of damage, and the creature's speed is reduced by half because its foot is wounded. This movement penalty lasts for 24 hours, until the creature is successfully treated with a DC 15 Heal check, or until it receives at least 1 point of magical healing. A charging or running creature must immediately stop if it steps on a caltrop. Any creature moving at half speed or slower can pick its way through a bed of caltrops with no trouble. Caltrops may not work against unusual opponents."
//   },
//   {
//     "Item": "Candle",
//     "Cost": 1,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": "A candle dimly illuminates a small area, increasing the light level in a 5-foot radius by one step (darkness becomes dim light and dim light becomes normal light). A candle cannot increase the light level above normal light. A candle burns for 1 hour."
//   },
//   {
//     "Item": "Canvas (sq. yd.)",
//     "Cost": 10,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Case, map or scroll",
//     "Cost": 100,
//     "Weight": 0.5,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Chain (10.)",
//     "Cost": 3000,
//     "Weight": 2,
//     "category": "Adventuring Gear",
//     "description": "Chain has hardness 10 and 5 hit points. It can be burst with a DC 26 Strength check."
//   },
//   {
//     "Item": "Chalk, 1 piece",
//     "Cost": 1,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Chest (empty)",
//     "Cost": 200,
//     "Weight": 25,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Crowbar",
//     "Cost": 200,
//     "Weight": 5,
//     "category": "Adventuring Gear",
//     "description": "A crowbar grants a +2 circumstance bonus on Strength checks made to force open a door or chest. If used in combat, treat a crowbar as a one-handed improvised weapon that deals bludgeoning damage equal to that of a club of its size."
//   },
//   {
//     "Item": "Firewood (per day)",
//     "Cost": 1,
//     "Weight": 20,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Fishhook",
//     "Cost": 10,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Fishing net, 25 sq..",
//     "Cost": 400,
//     "Weight": 5,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Flask (empty)",
//     "Cost": 3,
//     "Weight": 1.5,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Flint and steel",
//     "Cost": 100,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": "Flint and Steel: Lighting a torch with flint and steel is a full-round action, and lighting any other fire with them takes at least that long."
//   },
//   {
//     "Item": "Grappling hook",
//     "Cost": 100,
//     "Weight": 4,
//     "category": "Adventuring Gear",
//     "description": "Grappling Hook: Throwing a grappling hook requires a ranged attack roll, treating the hook as a thrown weapon with a range increment of 10 feet. Objects with ample places to catch the hook are AC 5."
//   },
//   {
//     "Item": "Hammer",
//     "Cost": 50,
//     "Weight": 2,
//     "category": "Adventuring Gear",
//     "description": "Hammer: If a hammer is used in combat, treat it as a one-handed improvised weapon that deals bludgeoning damage equal to that of a spiked gauntlet of its size."
//   },
//   {
//     "Item": "Hourglass",
//     "Cost": 2500,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Ink (1 oz. vial)",
//     "Cost": 800,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": "Ink: Ink in colors other than black costs twice as much."
//   },
//   {
//     "Item": "Inkpen",
//     "Cost": 10,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Jug, clay",
//     "Cost": 3,
//     "Weight": 9,
//     "category": "Adventuring Gear",
//     "description": "Jug, Clay: This basic jug is fitted with a stopper and holds 1 gallon of liquid."
//   },
//   {
//     "Item": "Ladder, 10-foot",
//     "Cost": 20,
//     "Weight": 20,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Lamp, common",
//     "Cost": 10,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": "Lamp, Common: A lamp illuminates a small area, providing normal light in a 15-foot radius and increasing the light level by one step for an additional 15 feet beyond that area (darkness becomes dim light and dim light becomes normal light). A lamp does not increase the light level in normal light or bright light. A lamp burns for 6 hours on one pint of oil. You can carry a lamp in one hand."
//   },
//   {
//     "Item": "Lantern, bullseye",
//     "Cost": 1200,
//     "Weight": 3,
//     "category": "Adventuring Gear",
//     "description": "Lantern, Bullseye: A bullseye lantern provides normal light in a 60-foot cone and increases the light level by one step in the area beyond that, out to a 120-foot cone (darkness becomes dim light and dim light becomes normal light). A bullseye lantern does not increase the light level in normal light or bright light. A lantern burns for 6 hours on one pint of oil. You can carry a lantern in one hand."
//   },
//   {
//     "Item": "Lantern, hooded",
//     "Cost": 700,
//     "Weight": 2,
//     "category": "Adventuring Gear",
//     "description": "Lantern, Hooded: A hooded lantern sheds normal light in a 30-foot radius and increases the light level by one step for an additional 30 feet beyond that area (darkness becomes dim light and dim light becomes normal light). A hooded lantern does not increase the light level in normal light or bright light. A lantern burns for 6 hours on one pint of oil. You can carry a lantern in one hand."
//   },
//   {
//     "Item": "Simple",
//     "Cost": 2000,
//     "Weight": 1,
//     "category": "Lock",
//     "description": "Lock: The DC to open a lock with the Disable Device skill depends on the lock's quality: simple (DC 20), average (DC 25), good (DC 30), or superior (DC 40)."
//   },
//   {
//     "Item": "Average",
//     "Cost": 4000,
//     "Weight": 1,
//     "category": "Lock",
//     "description": "Lock: The DC to open a lock with the Disable Device skill depends on the lock's quality: simple (DC 20), average (DC 25), good (DC 30), or superior (DC 40)."
//   },
//   {
//     "Item": "Good",
//     "Cost": 8000,
//     "Weight": 1,
//     "category": "Lock",
//     "description": "Lock: The DC to open a lock with the Disable Device skill depends on the lock's quality: simple (DC 20), average (DC 25), good (DC 30), or superior (DC 40)."
//   },
//   {
//     "Item": "Superior",
//     "Cost": 15000,
//     "Weight": 1,
//     "category": "Lock",
//     "description": "Lock: The DC to open a lock with the Disable Device skill depends on the lock's quality: simple (DC 20), average (DC 25), good (DC 30), or superior (DC 40)."
//   },
//   {
//     "Item": "Manacles",
//     "Cost": 1500,
//     "Weight": 2,
//     "category": "Adventuring Gear",
//     "description": "Manacles, Standard and Masterwork: Manacles can bind a Medium creature. A manacled creature can use the Escape Artist skill to slip free (DC 30, or DC 35 for masterwork manacles). Breaking the manacles requires a Strength check (DC 26, or DC 28 for masterwork manacles). Manacles have hardness 10 and 10 hit points. Most manacles have locks; add the cost of the lock you want to the cost of the manacles. For the same cost, you can buy manacles for a Small creature. For a Large creature, manacles cost 10 times the indicated amount, and for a Huge creature, 100 times the indicated amount. Gargantuan, Colossal, Tiny, Diminutive, and Fine creatures can be held only by specially made manacles, which cost at least 100 times the indicated amount."
//   },
//   {
//     "Item": "Manacles, masterwork",
//     "Cost": 5000,
//     "Weight": 2,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Mirror, small steel",
//     "Cost": 1000,
//     "Weight": 0.5,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Mug/Tankard, clay",
//     "Cost": 2,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Oil (1-pint flask)",
//     "Cost": 10,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": "Oil: A pint of oil burns for 6 hours in a lantern or lamp. You can also use a flask of oil as a splash weapon. Use the rules for alchemist's fire (see special Substances and Items on Table: Goods and Services), except that it takes a full-round action to prepare a flask with a fuse. Once it is thrown, there is a 50% chance of the flask igniting successfully. You can pour a pint of oil on the ground to cover an area 5 feet square, provided that the surface is smooth. If lit, the oil burns for 2 rounds and deals 1d3 points of fire damage to each creature in the area."
//   },
//   {
//     "Item": "Paper (sheet)",
//     "Cost": 40,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Parchment (sheet)",
//     "Cost": 20,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Pick, miner's",
//     "Cost": 300,
//     "Weight": 10,
//     "category": "Adventuring Gear",
//     "description": "Pick, Miner's: If a miner's pick is used in combat, treat it as a two-handed improvised weapon that deals piercing damage equal to that of a heavy pick of its size."
//   },
//   {
//     "Item": "Pitcher, clay",
//     "Cost": 2,
//     "Weight": 5,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Piton",
//     "Cost": 10,
//     "Weight": 0.5,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Pole, 10-foot",
//     "Cost": 5,
//     "Weight": 8,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Pot, iron",
//     "Cost": 80,
//     "Weight": 4,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Pouch, belt (empty)",
//     "Cost": 100,
//     "Weight": 0.5,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Ram, portable",
//     "Cost": 1000,
//     "Weight": 20,
//     "category": "Adventuring Gear",
//     "description": "Ram, Portable: This iron-shod wooden beam gives you a +2 circumstance bonus on Strength checks made to break open a door and allows a second person to help, automatically increasing your bonus by 2."
//   },
//   {
//     "Item": "Rations, trail (per day)",
//     "Cost": 50,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Rope, hemp (50.)",
//     "Cost": 100,
//     "Weight": 10,
//     "category": "Adventuring Gear",
//     "description": "Rope, Hemp: This rope has 2 hit points and can be burst with a DC 23 Strength check."
//   },
//   {
//     "Item": "Rope, silk (50.)",
//     "Cost": 1000,
//     "Weight": 5,
//     "category": "Adventuring Gear",
//     "description": "Rope, Silk: This rope has 4 hit points and can be burst with a DC 24 Strength check."
//   },
//   {
//     "Item": "Sack (empty)",
//     "Cost": 10,
//     "Weight": 0.5,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Sealing wax",
//     "Cost": 100,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Sewing needle",
//     "Cost": 50,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Shovel or0ade",
//     "Cost": 200,
//     "Weight": 8,
//     "category": "Adventuring Gear",
//     "description": "Shovel: If a shovel is used in combat, treat it as a one-handed improvised weapon that deals bludgeoning damage equal to that of a club of its size."
//   },
//   {
//     "Item": "Signal whistle",
//     "Cost": 80,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Signet ring",
//     "Cost": 500,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Sledge",
//     "Cost": 100,
//     "Weight": 10,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Soap (per lb.)",
//     "Cost": 50,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Spyglass",
//     "Cost": "100,000",
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": "Spyglass: Objects viewed through a spyglass are magnified to twice their size. Characters using a spyglass take a –1 penalty on Perception skill checks per 20 feet of distance to the target, if the target is visible."
//   },
//   {
//     "Item": "Tent",
//     "Cost": 1000,
//     "Weight": 20,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Torch",
//     "Cost": 1,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": "Torch: A torch burns for 1 hour, shedding normal light in a 20-foot radius and increasing the light level by one step for an additional 20 feet beyond that area (darkness becomes dim light and dim light becomes normal light). A torch does not increase the light level in normal light or bright light. If a torch is used in combat, treat it as a one-handed improvised weapon that deals bludgeoning damage equal to that of a gauntlet of its size, plus 1 point of fire damage."
//   },
//   {
//     "Item": "Vial, ink or potion",
//     "Cost": 100,
//     "Weight": 0,
//     "category": "Adventuring Gear",
//     "description": "Vial: A vial is made out of glass or steel and holds 1 ounce of liquid."
//   },
//   {
//     "Item": "Water clock",
//     "Cost": "100,000",
//     "Weight": 200,
//     "category": "Adventuring Gear",
//     "description": "Water Clock: This large, bulky contrivance gives the time accurately to within half an hour since it was last set. It requires a source of water, and it must be kept still because it marks time by the regulated flow of droplets of water."
//   },
//   {
//     "Item": "Waterskin",
//     "Cost": 100,
//     "Weight": 4,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Whetstone",
//     "Cost": 2,
//     "Weight": 1,
//     "category": "Adventuring Gear",
//     "description": ""
//   },
//   {
//     "Item": "Acid (flask)",
//     "Cost": 1000,
//     "Weight": 1,
//     "category": "Special Substances and Items",
//     "description": "Acid: You can throw a flask of acid as a splash weapon. Treat this attack as a ranged touch attack with a range increment of 10 feet. A direct hit deals 1d6 points of acid damage. Every creature within 5 feet of the point where the acid hits takes 1 point of acid damage from the splash."
//   },
//   {
//     "Item": "Alchemist's fire (flask)",
//     "Cost": 2000,
//     "Weight": 1,
//     "category": "Special Substances and Items",
//     "description": "Alchemist's Fire: You can throw a flask of alchemist's fire as a splash weapon. Treat this attack as a ranged touch attack with a range increment of 10 feet. A direct hit deals 1d6 points of fire damage. Every creature within 5 feet of the point where the flask hits takes 1 point of fire damage from the splash. On the round following a direct hit, the target takes an additional 1d6 points of damage. If desired, the target can use a full-round action to attempt to extinguish the flames before taking this additional damage. Extinguishing the flames requires a DC 15 Reflex save. Rolling on the ground provides the target a +2 bonus on the save. Leaping into a lake or magically extinguishing the flames automatically smothers the fire."
//   },
//   {
//     "Item": "Antitoxin (vial)",
//     "Cost": 5000,
//     "Weight": 0,
//     "category": "Special Substances and Items",
//     "description": "Antitoxin: If you drink a vial of antitoxin, you get a +5 alchemical bonus on Fortitude saving throws against poison for 1 hour."
//   },
//   {
//     "Item": "Everburning torch",
//     "Cost": 11000,
//     "Weight": 1,
//     "category": "Special Substances and Items",
//     "description": "Everburning Torch: This otherwise normal torch has a continual flame spell cast on it. This causes it to shed light like an ordinary torch, but it does not emit heat or deal fire damage if used as a weapon."
//   },
//   {
//     "Item": "Holy water (flask)",
//     "Cost": 2500,
//     "Weight": 1,
//     "category": "Special Substances and Items",
//     "description": "Holy Water: Holy water damages undead creatures and evil outsiders almost as if it were acid. A flask of holy water can be thrown as a splash weapon. Treat this attack as a ranged touch attack with a range increment of 10 feet. A flask breaks if thrown against the body of a corporeal creature, but to use it against an incorporeal creature, you must open the flask and pour the holy water out onto the target. Thus, you can douse an incorporeal creature with holy water only if you are adjacent to it. Doing so is a ranged touch attack that does not provoke attacks of opportunity. A direct hit by a flask of holy water deals 2d4 points of damage to an undead creature or an evil outsider. Each such creature within 5 feet of the point where the flask hits takes 1 point of damage from the splash. Temples to good deities sell holy water at cost (making no profit). Holy water is made using the bless water spell."
//   },
//   {
//     "Item": "Smokestick",
//     "Cost": 2000,
//     "Weight": 0.5,
//     "category": "Special Substances and Items",
//     "description": "Smokestick: This alchemically treated wooden stick instantly creates thick, opaque smoke when burned. The smoke fills a 10-foot cube (treat the effect as a fog cloud spell, except that a moderate or stronger wind dissipates the smoke in 1 round). The stick is consumed after 1 round, and the smoke dissipates naturally after 1 minute."
//   },
//   {
//     "Item": "Sunrod",
//     "Cost": 200,
//     "Weight": 1,
//     "category": "Special Substances and Items",
//     "description": "Sunrod: This 1-foot-long, gold-tipped, iron rod glows brightly when struck as a standard action. It sheds normal light in a 30-foot radius and increases the light level by one step for an additional 30 feet beyond that area (darkness becomes dim light and dim light becomes normal light). A sunrod does not increase the light level in normal light or bright light. It glows for 6 hours, after which the gold tip is burned out and worthless."
//   },
//   {
//     "Item": "Tanglefoot bag",
//     "Cost": 5000,
//     "Weight": 4,
//     "category": "Special Substances and Items",
//     "description": "Tanglefoot Bag: A tanglefoot bag is a small sack filled with tar, resin, and other sticky substances. When you throw a tanglefoot bag at a creature (as a ranged touch attack with a range increment of 10 feet), the bag comes apart and goo bursts out, entangling the target and then becoming tough and resilient upon exposure to air. An entangled creature takes a –2 penalty on attack rolls and a –4 penalty to Dexterity and must make a DC 15 Reflex save or be glued to the floor, unable to move. Even on a successful save, it can move only at half speed. Huge or larger creatures are unaffected by a tanglefoot bag. A flying creature is not stuck to the floor, but it must make a DC 15 Reflex save or be unable to fly (assuming it uses its wings to fly) and fall to the ground. A tanglefoot bag does not function underwater. A creature that is glued to the floor (or unable to fly) can break free by making a DC 17 Strength check or by dealing 15 points of damage to the goo with a slashing weapon. A creature trying to scrape goo off itself, or another creature assisting, does not need to make an attack roll; hitting the goo is automatic, after which the creature that hit makes a damage roll to see how much of the goo was scraped off. Once free, the creature can move (including flying) at half speed. If the entangled creature attempts to cast a spell, it must make concentration check with a DC of 15 + the spell's level or be unable to cast the spell. The goo becomes brittle and fragile after 2d4 rounds, cracking apart and losing its effectiveness. An application of universal solvent to a stuck creature dissolves the alchemical goo immediately."
//   },
//   {
//     "Item": "Thunderstone",
//     "Cost": 3000,
//     "Weight": 1,
//     "category": "Special Substances and Items",
//     "description": "Thunderstone: You can throw this stone as a ranged attack with a range increment of 20 feet. When it strikes a hard surface (or is struck hard), it creates a deafening bang that is treated as a sonic attack. Each creature within a 10-foot-radius spread must make a DC 15 Fortitude save or be deafened for 1 hour. A deafened creature, in addition to the obvious effects, takes a –4 penalty on initiative and has a 20% chance to miscast and lose any spell with a verbal component that it tries to cast. Since you don't need to hit a specific target, you can simply aim at a particular 5-foot square. Treat the target square as AC 5."
//   },
//   {
//     "Item": "Tindertwig",
//     "Cost": 100,
//     "Weight": 0,
//     "category": "Special Substances and Items",
//     "description": "Tindertwig: The alchemical substance on the end of this small, wooden stick ignites when struck against a rough surface. Creating a flame with a tindertwig is much faster than creating a flame with flint and steel (or a magnifying glass) and tinder. Lighting a torch with a tindertwig is a standard action (rather than a full-round action), and lighting any other fire with one is at least a standard action."
//   },
//   {
//     "Item": "Alchemist's lab",
//     "Cost": 20000,
//     "Weight": 40,
//     "category": "Tools and Skill Kits",
//     "description": "Alchemist's Lab: This lab is used for making alchemical items, and provides a +2 circumstance bonus on Craft (alchemy) checks. It has no bearing on the costs related to the Craft (alchemy) skill. Without this lab, a character with the Craft (alchemy) skill is assumed to have enough tools to use the skill but not enough to get the +2 bonus that the lab provides."
//   },
//   {
//     "Item": "Artisan's tools",
//     "Cost": 500,
//     "Weight": 5,
//     "category": "Tools and Skill Kits",
//     "description": "Artisan's Tools: These special tools include the items needed to pursue any craft. Without them, you have to use improvised tools (–2 penalty on Craft checks), if you can do the job at all."
//   },
//   {
//     "Item": "Artisan's tools, masterwork",
//     "Cost": 5500,
//     "Weight": 5,
//     "category": "Tools and Skill Kits",
//     "description": "Artisan's Tools, Masterwork: These tools serve the same purpose as artisan's tools, but masterwork artisan's tools are the perfect tools for the job, so you get a +2 circumstance bonus on Craft checks made with them."
//   },
//   {
//     "Item": "Climber's kit",
//     "Cost": 8000,
//     "Weight": 5,
//     "category": "Tools and Skill Kits",
//     "description": "Climber's Kit: These crampons, pitons, ropes, and tools give you a +2 circumstance bonus on Climb checks."
//   },
//   {
//     "Item": "Disguise kit",
//     "Cost": 5000,
//     "Weight": 8,
//     "category": "Tools and Skill Kits",
//     "description": "Disguise Kit: The kit is the perfect tool for disguise and provides a +2 circumstance bonus on Disguise checks. A disguise kit is exhausted after 10 uses."
//   },
//   {
//     "Item": "Healer's kit",
//     "Cost": 5000,
//     "Weight": 1,
//     "category": "Tools and Skill Kits",
//     "description": "Healer's Kit: This collection of bandages and herbs provides a +2 circumstance bonus on Heal checks. A healer's kit is exhausted after 10 uses."
//   },
//   {
//     "Item": "Holly and mistletoe",
//     "Cost": 0,
//     "Weight": 0,
//     "category": "Tools and Skill Kits",
//     "description": "Holly and Mistletoe: Druids commonly use these plants as divine focuses when casting spells."
//   },
//   {
//     "Item": "Holy symbol, wooden",
//     "Cost": 100,
//     "Weight": 0,
//     "category": "Tools and Skill Kits",
//     "description": "Holy Symbol, Silver or Wooden: A holy symbol focuses positive energy and is used by good clerics and paladins (or by neutral clerics who want to cast good spells or channel positive energy). Each religion has its own holy symbol."
//   },
//   {
//     "Item": "Holy symbol, silver",
//     "Cost": 2500,
//     "Weight": 1,
//     "category": "Tools and Skill Kits",
//     "description": "Holy Symbol, Silver or Wooden: A holy symbol focuses positive energy and is used by good clerics and paladins (or by neutral clerics who want to cast good spells or channel positive energy). Each religion has its own holy symbol."
//   },
//   {
//     "Item": "Unholy symbol, wooden",
//     "Cost": 100,
//     "Weight": 0,
//     "category": "Tools and Skill Kits",
//     "description": "Unholy Symbols: An unholy symbol is like a holy symbol except that it focuses negative energy and is used by evil clerics (or by neutral clerics who want to cast evil spells or channel negative energy)."
//   },
//   {
//     "Item": "Unholy symbol, silver",
//     "Cost": 2500,
//     "Weight": 1,
//     "category": "Tools and Skill Kits",
//     "description": "Unholy Symbols: An unholy symbol is like a holy symbol except that it focuses negative energy and is used by evil clerics (or by neutral clerics who want to cast evil spells or channel negative energy)."
//   },
//   {
//     "Item": "Magnifying glass",
//     "Cost": 10000,
//     "Weight": 0,
//     "category": "Tools and Skill Kits",
//     "description": "Magnifying Glass: This simple lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires bright light, such as sunlight to focus, tinder to ignite, and at least a full-round action. A magnifying glass grants a +2 circumstance bonus on Appraise checks involving any item that is small or highly detailed."
//   },
//   {
//     "Item": "Musical instrument, common",
//     "Cost": 500,
//     "Weight": 3,
//     "category": "Tools and Skill Kits",
//     "description": ""
//   },
//   {
//     "Item": "Musical instrument, masterwork",
//     "Cost": 10000,
//     "Weight": 3,
//     "category": "Tools and Skill Kits",
//     "description": "A masterwork instrument grants a +2 circumstance bonus on Perform checks involving its use."
//   },
//   {
//     "Item": "Scale, merchant's",
//     "Cost": 200,
//     "Weight": 1,
//     "category": "Tools and Skill Kits",
//     "description": "Scale, Merchant's: A merchant's scale grants a +2 circumstance bonus on Appraise checks involving items that are valued by weight, including anything made of precious metals."
//   },
//   {
//     "Item": "Spell component pouch",
//     "Cost": 500,
//     "Weight": 2,
//     "category": "Tools and Skill Kits",
//     "description": "Spell Component Pouch: A spellcaster with a spell component pouch is assumed to have all the material components and focuses needed for spellcasting, except for those components that have a specific cost, divine focuses, and focuses that wouldn't fit in a pouch."
//   },
//   {
//     "Item": "Spellbook, wizard's (blank)",
//     "Cost": 1500,
//     "Weight": 3,
//     "category": "Tools and Skill Kits",
//     "description": "Spellbook, Wizard's: A spellbook has 100 pages of parchment, and each spell takes up one page per spell level (one page each for 0-level spells)."
//   },
//   {
//     "Item": "Thieves' tools",
//     "Cost": 3000,
//     "Weight": 1,
//     "category": "Tools and Skill Kits",
//     "description": "Thieves' Tools: This kit contains lockpicks and other tools you need to use the Disable Device skill. Without these tools, you must use improvised tools, and you take a –2 circumstance penalty on Disable Device checks."
//   },
//   {
//     "Item": "Thieves' tools, masterwork",
//     "Cost": 10000,
//     "Weight": 2,
//     "category": "Tools and Skill Kits",
//     "description": "Thieves' Tools, Masterwork: This kit contains extra tools and tools of better make, which grant a +2 circumstance bonus on Disable Device checks."
//   },
//   {
//     "Item": "Tool, masterwork",
//     "Cost": 5000,
//     "Weight": 1,
//     "category": "Tools and Skill Kits",
//     "description": "Tool, Masterwork: This well-made item is the perfect tool for the job. It grants a +2 circumstance bonus on a related skill check (if any). Bonuses provided by multiple masterwork items do not stack."
//   },
//   {
//     "Item": "Artisan's outfit",
//     "Cost": 100,
//     "Weight": 4,
//     "category": "Clothing",
//     "description": "Artisan's Outfit: This outfit includes a shirt with buttons, a skirt or pants with a drawstring, shoes, and perhaps a cap or hat. It may also include a belt or a leather or cloth apron for carrying tools."
//   },
//   {
//     "Item": "Cleric's vestments",
//     "Cost": 500,
//     "Weight": 6,
//     "category": "Clothing",
//     "description": "Cleric's Vestments: These clothes are for performing priestly functions, not for adventuring. Cleric's vestments typically include a cassock, stole, and surplice."
//   },
//   {
//     "Item": "Cold-weather outfit",
//     "Cost": 800,
//     "Weight": 7,
//     "category": "Clothing",
//     "description": "Cold-Weather Outfit: This outfit includes a wool coat, linen shirt, wool cap, heavy cloak, thick pants or skirt, and boots. This outfit grants a +5 circumstance bonus on Fortitude saving throws against exposure to cold weather."
//   },
//   {
//     "Item": "Courtier's outfit",
//     "Cost": 3000,
//     "Weight": 6,
//     "category": "Clothing",
//     "description": "Courtier's Outfit: This outfit includes fancy, tailored clothes in whatever fashion happens to be the current style in the courts of the nobles. Anyone trying to influence nobles or courtiers while wearing street dress will have a hard time of it (–2 penalty on Charisma-based skill checks to influence such individuals). If you wear this outfit without jewelry (costing an additional 5000), you look like an out-of-place commoner."
//   },
//   {
//     "Item": "Entertainer's outfit",
//     "Cost": 300,
//     "Weight": 4,
//     "category": "Clothing",
//     "description": "Entertainer's Outfit: This set of flashy—perhaps even gaudy—clothes is for entertaining. While the outfit looks whimsical, its practical design lets you tumble, dance, walk a tightrope, or just run (if the audience turns ugly)."
//   },
//   {
//     "Item": "Explorer's outfit",
//     "Cost": 1000,
//     "Weight": 8,
//     "category": "Clothing",
//     "description": "Explorer's Outfit: This set of clothes is for someone who never knows what to expect. It includes sturdy boots, leather breeches or a skirt, a belt, a shirt (perhaps with a vest or jacket), gloves, and a cloak. Rather than a leather skirt, a leather overtunic may be worn over a cloth skirt. The clothes have plenty of pockets (especially the cloak). The outfit also includes any extra accessories you might need, such as a scarf or a wide-brimmed hat."
//   },
//   {
//     "Item": "Monk's outfit",
//     "Cost": 500,
//     "Weight": 2,
//     "category": "Clothing",
//     "description": "Monk's Outfit: This simple outfit includes sandals, loose breeches, and a loose shirt, and is bound together with sashes. The outfit is designed to give you maximum mobility, and it's made of high-quality fabric. You can conceal small weapons in pockets hidden in the folds, and the sashes are strong enough to serve as short ropes."
//   },
//   {
//     "Item": "Noble's outfit",
//     "Cost": 7500,
//     "Weight": 10,
//     "category": "Clothing",
//     "description": "Noble's Outfit: These clothes are designed specifically to be expensive and gaudy. Precious metals and gems are worked into the clothing. A would-be noble also needs a signet ring and jewelry (worth at least 10000) to accessorize this outfit."
//   },
//   {
//     "Item": "Peasant's outfit",
//     "Cost": 10,
//     "Weight": 2,
//     "category": "Clothing",
//     "description": "Peasant's Outfit: This set of clothes consists of a loose shirt and baggy breeches, or a loose shirt and skirt or overdress. Cloth wrappings are used for shoes."
//   },
//   {
//     "Item": "Royal outfit",
//     "Cost": 20000,
//     "Weight": 15,
//     "category": "Clothing",
//     "description": "Royal Outfit: This is just the clothing, not the royal scepter, crown, ring, and other accoutrements. Royal clothes are ostentatious, with gems, gold, silk, and fur in abundance."
//   },
//   {
//     "Item": "Scholar's outfit",
//     "Cost": 500,
//     "Weight": 6,
//     "category": "Clothing",
//     "description": "Scholar's Outfit: Perfect for a scholar, this outfit includes a robe, a belt, a cap, soft shoes, and possibly a cloak."
//   },
//   {
//     "Item": "Traveler's outfit",
//     "Cost": 100,
//     "Weight": 5,
//     "category": "Clothing",
//     "description": "Traveler's Outfit: This set of clothes consists of boots, a wool skirt or breeches, a sturdy belt, a shirt (perhaps with a vest or jacket), and an ample cloak with a hood."
//   },
//   {
//     "Item": "Ale",
//     "Cost": "",
//     "Weight": "",
//     "category": "Food, Drink, and Lodging",
//     "description": ""
//   },
//   {
//     "Item": "Gallon",
//     "Cost": 20,
//     "Weight": 8,
//     "category": "Food, Drink, and Lodging",
//     "description": ""
//   },
//   {
//     "Item": "Mug",
//     "Cost": 4,
//     "Weight": 1,
//     "category": "Food, Drink, and Lodging",
//     "description": ""
//   },
//   {
//     "Item": "Banquet (per person)",
//     "Cost": 1000,
//     "Weight": 0,
//     "category": "Food, Drink, and Lodging",
//     "description": ""
//   },
//   {
//     "Item": "Bread, loaf of",
//     "Cost": 2,
//     "Weight": 0.5,
//     "category": "Food, Drink, and Lodging",
//     "description": ""
//   },
//   {
//     "Item": "Cheese, hunk of",
//     "Cost": 10,
//     "Weight": 0.5,
//     "category": "Food, Drink, and Lodging",
//     "description": ""
//   },
//   {
//     "Item": "Good",
//     "Cost": 200,
//     "Weight": 0,
//     "category": "Lodging",
//     "description": "Good accommodations consist of a small, private room with one bed, some amenities, and a covered chamber pot in the corner."
//   },
//   {
//     "Item": "Common",
//     "Cost": 50,
//     "Weight": 0,
//     "category": "Lodging",
//     "description": "Common accommodations consist of a place on a raised, heated floor and the use of a blanket and a pillow."
//   },
//   {
//     "Item": "Poor",
//     "Cost": 20,
//     "Weight": 0,
//     "category": "Lodging",
//     "description": "Poor accommodations at an inn amount to a place on the floor near the hearth."
//   },
//   {
//     "Item": "Good",
//     "Cost": 50,
//     "Weight": 0,
//     "category": "Food, Drink",
//     "description": "Good meals might be composed of bread and pastries, beef, peas, and ale or wine."
//   },
//   {
//     "Item": "Common",
//     "Cost": 30,
//     "Weight": 0,
//     "category": "Food, Drink",
//     "description": "Common meals might consist of bread, chicken stew, carrots, and watered-down ale or wine."
//   },
//   {
//     "Item": "Poor",
//     "Cost": 10,
//     "Weight": 0,
//     "category": "Food, Drink",
//     "description": "Poor meals might be composed of bread, baked turnips, onions, and water."
//   },
//   {
//     "Item": "Meat, chunk of",
//     "Cost": 30,
//     "Weight": 0.5,
//     "category": "Food, Drink, and Lodging",
//     "description": ""
//   },
//   {
//     "Item": "Common (pitcher)",
//     "Cost": 20,
//     "Weight": 6,
//     "category": "Food, Drink, and Lodging",
//     "description": ""
//   },
//   {
//     "Item": "Fine (bottle)",
//     "Cost": 1000,
//     "Weight": 1.5,
//     "category": "Food, Drink, and Lodging",
//     "description": ""
//   },
//   {
//     "Item": "Bit and bridle",
//     "Cost": 200,
//     "Weight": 1,
//     "category": "Mounts and Related Gear",
//     "description": ""
//   },
//   {
//     "Item": "Dog, guard",
//     "Cost": 2500,
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": ""
//   },
//   {
//     "Item": "Dog, riding",
//     "Cost": 15000,
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "Dog, Riding: This Medium dog is specially trained to carry a Small humanoid rider. It is brave in combat like a combat-trained horse. Due to its smaller stature, you take no damage when you fall from a riding dog."
//   },
//   {
//     "Item": "Donkey or mule",
//     "Cost": 800,
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "Donkey or Mule: Donkeys and mules are stolid in the face of danger, hardy, surefooted, and capable of carrying heavy loads over vast distances. Unlike a horse, a donkey or a mule is willing (though not eager) to enter dungeons and other strange or threatening places."
//   },
//   {
//     "Item": "Feed (per day)",
//     "Cost": 5,
//     "Weight": 10,
//     "category": "Mounts and Related Gear",
//     "description": "Feed: Horses, donkeys, mules, and ponies can graze to sustain themselves, but providing feed for them is better. If you have a riding dog, you have to feed it meat."
//   },
//   {
//     "Item": "Horse, heavy",
//     "Cost": 20000,
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "A horse is suitable as a mount for a human, dwarf, elf, half-elf, or half-orc."
//   },
//   {
//     "Item": "Horse, heavy (combat trained)",
//     "Cost": 30000,
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "A war-trained horse can be ridden into combat without danger. See the Handle Animal skill for a list of tricks known by horses and ponies with combat training. * A mount wearing heavy armor moves at only triple its normal speed when running instead of quadruple."
//   },
//   {
//     "Item": "Horse, light",
//     "Cost": 7500,
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "A horse is suitable as a mount for a human, dwarf, elf, half-elf, or half-orc."
//   },
//   {
//     "Item": "Horse, light(combat trained)",
//     "Cost": 11000,
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "A war-trained horse can be ridden into combat without danger. See the Handle Animal skill for a list of tricks known by horses and ponies with combat training. * A mount wearing heavy armor moves at only triple its normal speed when running instead of quadruple."
//   },
//   {
//     "Item": "Pony",
//     "Cost": 3000,
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "A pony is smaller than a horse and is a suitable mount for a gnome or halfling."
//   },
//   {
//     "Item": "Pony (combat trained)",
//     "Cost": 4500,
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "A war-trained horse can be ridden into combat without danger. See the Handle Animal skill for a list of tricks known by horses and ponies with combat training. * A mount wearing heavy armor moves at only triple its normal speed when running instead of quadruple."
//   },
//   {
//     "Item": "Military",
//     "Cost": 2000,
//     "Weight": 30,
//     "category": "Mounts and Related Gear",
//     "description": "Saddle, Military: This saddle braces the rider, providing a +2 circumstance bonus on Ride checks related to staying in the saddle. If you're knocked unconscious while in a military saddle, you have a 75% chance to stay in the saddle."
//   },
//   {
//     "Item": "Pack",
//     "Cost": 500,
//     "Weight": 15,
//     "category": "Mounts and Related Gear",
//     "description": "Saddle, Pack: A pack saddle holds gear and supplies, but not a rider. It holds as much gear as the mount can carry."
//   },
//   {
//     "Item": "Riding",
//     "Cost": 1000,
//     "Weight": 25,
//     "category": "Mounts and Related Gear",
//     "description": "Saddle, Riding: If you are knocked unconscious while in a riding saddle, you have a 50% chance to stay in the saddle."
//   },
//   {
//     "Item": "Military",
//     "Cost": 6000,
//     "Weight": 40,
//     "category": "Mounts and Related Gear",
//     "description": "Saddle, Exotic: An exotic saddle is designed for an unusual mount. Exotic saddles come in military, pack, and riding styles."
//   },
//   {
//     "Item": "Pack",
//     "Cost": 1500,
//     "Weight": 20,
//     "category": "Mounts and Related Gear",
//     "description": "Saddle, Exotic: An exotic saddle is designed for an unusual mount. Exotic saddles come in military, pack, and riding styles."
//   },
//   {
//     "Item": "Riding",
//     "Cost": 3000,
//     "Weight": 30,
//     "category": "Mounts and Related Gear",
//     "description": "Saddle, Exotic: An exotic saddle is designed for an unusual mount. Exotic saddles come in military, pack, and riding styles."
//   },
//   {
//     "Item": "Saddlebags",
//     "Cost": 400,
//     "Weight": 8,
//     "category": "Mounts and Related Gear",
//     "description": ""
//   },
//   {
//     "Item": "Stabling (per day)",
//     "Cost": 50,
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": ""
//   },
//   {
//     "Item": "Carriage",
//     "Cost": 10000,
//     "Weight": 600,
//     "category": "Mounts and Related Gear",
//     "description": "Carriage: This four-wheeled vehicle can transport as many as four people within an enclosed cab, plus two drivers. In general, two horses (or other beasts of burden) draw it. A carriage comes with the harness needed to pull it."
//   },
//   {
//     "Item": "Cart",
//     "Cost": 1500,
//     "Weight": 200,
//     "category": "Mounts and Related Gear",
//     "description": "Cart: This two-wheeled vehicle can be drawn by a single horse (or other beast of burden). It comes with a harness."
//   },
//   {
//     "Item": "Galley",
//     "Cost": "3,000,000",
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "Galley: This three-masted ship has 70 oars on either side and requires a total crew of 200. A galley is 130 feet long and 20 feet wide, and can carry 150 tons of cargo or 250 soldiers. For 8,00000 more, it can be fitted with a ram and castles with firing platforms fore, aft, and amidships. This ship cannot make sea voyages and sticks to the coast. It moves about 4 miles per hour when being rowed or under sail."
//   },
//   {
//     "Item": "Keelboat",
//     "Cost": "300,000",
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "Keelboat: This 50- to 75-foot-long ship is 15 to 20 feet wide and has a few oars to supplement its single mast with a square sail. It has a crew of 8 to 15 and can carry 40 to 50 tons of cargo or 100 soldiers. It can make sea voyages, as well as sail down rivers (thanks to its flat bottom). It moves about 1 mile per hour."
//   },
//   {
//     "Item": "Longship",
//     "Cost": "1,000,000",
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "Longship: This 75-foot-long ship with 40 oars requires a total crew of 50. It has a single mast and a square sail, and it can carry 50 tons of cargo or 120 soldiers. A longship can make sea voyages. It moves about 3 miles per hour when being rowed or under sail."
//   },
//   {
//     "Item": "Rowboat",
//     "Cost": 5000,
//     "Weight": 100,
//     "category": "Mounts and Related Gear",
//     "description": "Rowboat: This 8- to 12-foot-long boat with two oars holds two or three Medium passengers. It moves about 1-1/2 miles per hour."
//   },
//   {
//     "Item": "Oar",
//     "Cost": 200,
//     "Weight": 10,
//     "category": "Mounts and Related Gear",
//     "description": ""
//   },
//   {
//     "Item": "Sailing ship",
//     "Cost": "1,000,000",
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "Sailing Ship: This large, seaworthy ship is 75 to 90 feet long and 20 feet wide, and has a crew of 20. It can carry 150 tons of cargo. It has square sails on its two masts and can make sea voyages. It moves about 2 miles per hour."
//   },
//   {
//     "Item": "Sled",
//     "Cost": 2000,
//     "Weight": 300,
//     "category": "Mounts and Related Gear",
//     "description": "Sled: This is a wagon on runners for snow and ice travel. In general, two horses (or other beasts of burden) draw it. A sled comes with the harness needed to pull it."
//   },
//   {
//     "Item": "Wagon",
//     "Cost": 3500,
//     "Weight": 400,
//     "category": "Mounts and Related Gear",
//     "description": "Wagon: A four-wheeled, open vehicle for transporting heavy loads. Two horses (or other beasts of burden) must draw it. A wagon comes with the harness needed to pull it."
//   },
//   {
//     "Item": "Warship",
//     "Cost": "2,500,000",
//     "Weight": 0,
//     "category": "Mounts and Related Gear",
//     "description": "Warship: This 100-foot-long ship has a single mast, although oars can also propel it. It has a crew of 60 to 80 rowers. This ship can carry 160 soldiers, but not for long distances, since there isn't room for supplies to support that many people. The warship cannot make sea voyages and sticks to the coast. It is not used for cargo. It moves about 2-1/2 miles per hour when being rowed or under sail."
//   },
//   {
//     "Item": "Coach cab",
//     "Cost": 3,
//     "Weight": 0,
//     "category": "Spellcasting and Services",
//     "description": "Coach Cab: The price given is for a ride in a coach that transports people (and light cargo) between towns. For a ride in a cab that transports passengers within a city, 1 copper piece usually takes you anywhere you need to go."
//   },
//   {
//     "Item": "Hireling, trained",
//     "Cost": 30,
//     "Weight": 0,
//     "category": "Spellcasting and Services",
//     "description": "Hireling, Trained: The amount given is the typical daily wage for mercenary warriors, masons, craftsmen, cooks, scribes, teamsters, and other trained hirelings. This value represents a minimum wage; many such hirelings require significantly higher pay."
//   },
//   {
//     "Item": "Hireling, untrained",
//     "Cost": 10,
//     "Weight": 0,
//     "category": "Spellcasting and Services",
//     "description": "Hireling, Untrained: The amount shown is the typical daily wage for laborers, maids, and other menial workers."
//   },
//   {
//     "Item": "Messenger",
//     "Cost": 2,
//     "Weight": 0,
//     "category": "Spellcasting and Services",
//     "description": "Messenger: This includes horse-riding messengers and runners. Those willing to carry a message to a place they were going anyway may ask for only half the indicated amount."
//   },
//   {
//     "Item": "Road or gate toll",
//     "Cost": 1,
//     "Weight": 0,
//     "category": "Spellcasting and Services",
//     "description": "Road or Gate Toll: A toll is sometimes charged to cross a well-kept and well-guarded road to pay for patrols on it and for its upkeep. Occasionally, a large, walled city charges a toll to enter or exit (or sometimes just to enter)."
//   },
//   {
//     "Item": "Ship's passage",
//     "Cost": 10,
//     "Weight": 0,
//     "category": "Spellcasting and Services",
//     "description": "Ship's Passage: Most ships do not specialize in passengers, but many have the capability to take a few along when transporting cargo. Double the given cost for creatures larger than Medium or creatures that are otherwise difficult to bring aboard a ship."
//   },
//   {
//     "Item": "Spellcasting",
//     "Cost": "",
//     "Weight": 0,
//     "category": "Spellcasting and Services",
//     "description": "Spellcasting: cost is Caster level × spell level × 1000. The indicated amount is how much it costs to get a spellcaster to cast a spell for you. This cost assumes that you can go to the spellcaster and have the spell cast at his convenience (generally at least 24 hours later, so that the spellcaster has time to prepare the spell in question). If you want to bring the spellcaster somewhere to cast a spell you need to negotiate with him, and the default answer is no. The cost given is for any spell that does not require a costly material component. If the spell includes a material component, add the cost of that component to the cost of the spell. If the spell has a focus component (other than a divine focus), add 1/10 the cost of that focus to the cost of the spell. Furthermore, if a spell has dangerous consequences, the spellcaster will certainly require proof that you can and will pay for dealing with any such consequences (that is, assuming that the spellcaster even agrees to cast such a spell, which isn't certain). In the case of spells that transport the caster and characters over a distance, you will likely have to pay for two castings of the spell, even if you aren't returning with the caster. In addition, not every town or village has a spellcaster of sufficient level to cast any spell. In general, you must travel to a small town (or larger settlement) to be reasonably assured of finding a spellcaster capable of casting 1st-level spells, a large town for 2nd-level spells, a small city for 3rd- or 4th-level spells, a large city for 5th- or 6th-level spells, and a metropolis for 7th- or 8th-level spells. Even a metropolis isn't guaranteed to have a local spellcaster able to cast 9th-level spells."
//   }
// ]
