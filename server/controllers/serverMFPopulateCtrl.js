var Feats = require('./../models/Feats');
var spells = require('./../models/spells');
var races = require('./../models/Races');
var Armor = require('./../models/armor');
var Chat = require('./../models/chat');
var GoodsAndServices = require('./../models/goodsAndServices');
var Skills = require('./../models/skills');
var Weapons = require('./../models/weapons');
var DamagingArmor = require('./../models/damagingArmor');
var Class = require('./../models/class');
var BonusSpells = require('./../models/bonusSpells');
var TempUser = require('./../models/tempUser');
var Character = require('./../models/character');


module.exports = {

// UPDATE //
  editFeat: function(req, res,next){
    Feats.update(req.query, req.body, function(err,user){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },

// POST //

  addFeat: function(req, res, next){
    Feats.create(req.body, function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addSpells: function(req, res, next){
    spells.create(req.body, function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addArmor: function(req, res, next){
    Armor.create(req.body, function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addGoodsAndServices: function(req, res, next){
    GoodsAndServices.create(req.body, function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addSkills: function(req, res, next){
    Skills.create(req.body, function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addWeapons: function(req, res, next){
    Weapons.create(req.body, function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addDamagingArmor: function(req, res, next){
    DamagingArmor.create(req.body, function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addChat: function(req, res, next){
    Chat.create(req.body, function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addClass: function(req, res, next){
    Class.create(req.body, function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addRaces: function(req, res, next){
    races.create(req.body, function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },
  addBonusSpells: function(req, res, next){
    BonusSpells.create(req.body, function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(user);
    })
  },

 // GET //

 getFeat: function(req, res, next){
   Feats.find(req.query, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 getSpells: function(req, res, next){
   spells.find(req.query, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 getClass: function(req, res, next){
   Class.find(req.query, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 getArmor: function(req, res, next){
   Armor.find(req.query, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 getRaces: function(req, res, next){
   races.find(req.query, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 getChat: function(req, res, next){
   Chat.find(req.query, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 getSkills: function(req, res, next){
   Skills.find(req.query, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 getWeapons: function(req, res, next){
   Weapons.find(req.query, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 getDamagingArmor: function(req, res, next){
   DamagingArmor.find(req.query, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 getGoodsAndServices: function(req, res, next){
   GoodsAndServices.find(req.query, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 getBonusSpells: function(req, res, next){
   BonusSpells.find(req.query, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 getUserCharacters: function(req, res, next){
   Character.find({'static.userId': req.params.userId}, function(err, chars){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(chars);
   }) 
 },

 //TEMP USER
 addUser: function(req, res, next){
   TempUser.create(req.body, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 createCharacter: function(req, res, next){
   req.body.static.userId = req.user._id;
   Character.create(req.body, function(err, char){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(char);
   })
 },
 getCharacter: function(req, res, next){
   Character.find({_id: req.params.charId}, function(err, user){
     if(err){
       return res.status(500).send(err);
     }
     res.status(200).send(user);
   })
 },
 editCharacter: function(req, res, next){
   Character.findByIdAndUpdate(req.params.charId, req.body, function(err, newCharInfo) {
     if (err) {
       return res.status(500).send(err);
     }
     res.status(200).send(newCharInfo);
   });
 }


}
