var Feats = require('./../models/Feats');
var Class = require('./../models/class');
var Armor = require('./../models/Armor');


module.exports = {

  addFeat: function(req, res, next){
    Feats.create(req.body, function(err, user){
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
  addClass: function(req, res, next){
    Class.create(req.body, function(err, user){
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  }
  
}
