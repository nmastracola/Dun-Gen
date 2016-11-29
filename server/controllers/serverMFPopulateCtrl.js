var Feats = require('./../models/Feats');
var Armor = require('./../models/armor');
var Chat = require('./../models/chat');
var GoodsAndServices = require('./../models/goodsAndServices');
var Skills = require('./../models/skills');
var Weapons = require('./../models/weapons');
var DamagingArmor = require('./../models/damagingArmor');
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
  addArmor: function(req, res, next){
    Armor.create(req.body, function(err, user){
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addGoodsAndServices: function(req, res, next){
    GoodsAndServices.create(req.body, function(err, user){
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addSkills: function(req, res, next){
    Skills.create(req.body, function(err, user){
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addWeapons: function(req, res, next){
    Weapons.create(req.body, function(err, user){
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addDamagingArmor: function(req, res, next){
    DamagingArmor.create(req.body, function(err, user){
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addChat: function(req, res, next){
    Chat.create(req.body, function(err, user){
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
