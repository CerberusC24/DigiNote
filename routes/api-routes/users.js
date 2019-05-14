var db = require("../models");

module.exports = function(app) {

  // Find all users and return them to the user with res.json
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // Find one user with the id in req.params.id and return them to the user with res.json
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  app.post("/api/users", function(req, res) {
    // Create a user with the data available to us in req.body
    console.log(req.body);
    db.User.create(req.body).then(function(dbuser) {
      res.json(dbuser);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    // Delete the user with the id available to us in req.params.id
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbuser) {
      res.json(dbuser);
    });
  });
};