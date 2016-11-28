var Feats = require('./../models/Feats');
var Class = require('./../models/Class');

module.exports = {

  addFeat: function(req, res, next){
    Feats.create(req.body, function(err, user){
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