const mongoose = require("mongoose");

const Schema = monotype.Schema;

// Creates the workout schema
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter an exercise name",
      },
      type: {
        type: String,
        trim: true,
        required: "Enter an exercise type",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter an exercise duration in minutes",
      },
      weight: {
        type: Number,
        trim: true,
        required: "Enter the weight lifted",
      },
      reps: {
        type: Number,
        trim: true,
        required: "Enter the number of repetitions",
      },
      sets: {
        type: Number,
        trim: true,
        required: "Enter the number of sets",
      },
    },
  ],
});

// Created mongoose model 'workout' and apply the workoutSchema
const Workout = mongoose.model("workout", workoutSchema);

// Export workout model
module.exports = Workout;
