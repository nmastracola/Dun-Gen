// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');

// DEFINE SCHEMA
// ============================================================
var racesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  background: [{
    pretext: {
      type: String,
      required: true
    },
    physicalDescription: {
      type: String,
      required: true
    },
    society: {
      type: String,
      required: true
    },
    relations: {
      type: String,
      required: true
    },
    alignmentAndReligion: {
      type: String,
      required: true
    },
    adventurers: {
      type: String,
      required: true
    },
    names: {
      type: String
    }
  }],
  mod: {
    str: {
      type: Number
    },
    con: {
      type: Number
    },
    dex: {
      type: Number
    },
    int: {
      type: Number
    },
    wis: {
      type: Number
    },
    cha: {
      type: Number
    },
    bon: {
      type: Number
    }
  },
  size: {
    type: String
  },
  speed: {
    type: Number
  },
  traits: [{
    name: {
      type: String
    },
    desc: {
      type: String
    },
    type: {
      type: String
    },
    math: [{
      modifierType: {
        type: String
        },
      modifierValue: {
        type: String
        }
     }]
  }]
});

// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('Races', racesSchema);
