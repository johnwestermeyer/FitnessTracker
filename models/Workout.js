const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: String,
        name: {
            type: String,
            trim: true,
            required: "Workout Name is Required"
        },
        duration: {
            type: Number,
            reqired: "Duration is Required"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
