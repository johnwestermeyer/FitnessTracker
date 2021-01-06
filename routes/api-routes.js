var db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
        db.Categories.findAll({}).then(function(dbCats) {
          res.json(dbCats);
        });
      });

}