const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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
        type: Number,
        reqired: "Weight is Required"
    },
    reps: {
        type: Number,
        reqired: "Repa is Required"
    },
    sets: {
        type: Number,
        reqired: "Sets is Required"
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
