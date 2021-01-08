const db = require("../models");
const mongoose = require("mongoose");

module.exports = function(app) {
    app.get("/api/workouts",async (req, res) => {
      db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }]).then(function(dbWork) {
        res.json(dbWork);
      });
    });

    app.get("/api/workouts/:id", function(req, res) {
        db.Workout.findOne({_id: mongoose.Types.ObjectId(req.param.id)}).then(function(dbWork) {
          res.json(dbWork);
        });
      });
    app.post("/api/workouts", function(req, res) {
      db.Workout.findOne(req.body).then(function(dbWork) {
        res.json(dbWork);
      });
    });

    app.get("/api/workouts/range", function(req, res) {
      db.Workout.find({}).then(function(dbWork) {
        res.json(dbWork);
      });
    });
    
}