var Feats = require('./../models/Feats');
var spells = require('./../models/spells');
var Armor = require('./../models/Armor');
var races = require('./../models/Races');

// var Class = require('./../models/class');

module.exports = {

  addFeat: function(req, res, next){
    Feats.create(req.body, function(err, user){
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addSpells: function(req, res, next){
    spells.create(req.body, function(err, user){
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addArmor: function(req, res, next){
    Armors.create(req.body, function(err, user){
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addRaces: function(req, res, next){
    races.create(req.body, function(err, user){
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  }

  // addClass: function(req, res, next){
  //   Classes.create(req.body, function(err, user){
  //     if(err){
  //       res.status(500).send(err);
  //     }
  //     res.status(200).send(user);
  //   })
  // }

}
