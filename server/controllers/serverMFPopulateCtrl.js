var Feats = require('./../models/Feats');
var spells = require('./../models/spells');
var races = require('./../models/Races');
var Armor = require('./../models/armor');
var Chat = require('./../models/chat');
var GoodsAndServices = require('./../models/goodsAndServices');
var Skills = require('./../models/skills');
var Weapons = require('./../models/weapons');
var DamagingArmor = require('./../models/damagingArmor');
// var Class = require('./../models/class');
var Class = require('./../models/class');
var BonusSpells = require('./../models/bonusSpells');

module.exports = {

// POST //

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
  },
  addClass: function(req, res, next){
    Class.create(req.body, function(err, user){
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
  },
  addBonusSpells: function(req, res, next){
    BonusSpells.create(req.body, function(err, user){
      if(err){
        res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },


 // GET //

 getFeat: function(req, res, next){
   Feats.find(req.query, function(err, user){
     if(err){
       res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 getSpells: function(req, res, next){
   spells.find(req.query, function(err, user){
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
