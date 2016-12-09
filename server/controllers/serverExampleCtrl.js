// REQUIRE DEPENDENCIES
// ============================================================
var Example = require('./../models/Example');
// EXPORT METHODS
// ============================================================
module.exports = {
  // CRUD METHODS
  // ============================================================
  read: function(req, res) {
    Example.find(req.query, function(err, example) {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).send(example);
    });
  },
  create: function(req, res) {
    Example.create(req.body, function(err, example) {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).send(example);
    });
  },
  update: function(req, res) {
    Example.findByIdAndUpdate(req.params.id, req.body, function(err, example) {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).send(example);
    });
  },
  delete: function(req, res) {
    Example.findByIdAndRemove(req.params.id, function(err, example) {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).send(example);
    });
  }
  // OTHER METHODS
  // ============================================================
  
};