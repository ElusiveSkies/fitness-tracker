const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Creates the workout schema
const WorkoutSchema = new Schema({
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
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter an exercise duration in minutes",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
},
{
  toJSON: {
    virtuals: true,
  },
}
);
// Returns total exercise duration
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total,exercise) => {
    return total + exercise.duration;
  }, 0);
});

// Created mongoose model 'workout' and apply the workoutSchema
const Workout = mongoose.model("workout", WorkoutSchema);

// Export workout model
module.exports = Workout;
