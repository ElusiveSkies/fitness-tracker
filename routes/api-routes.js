const router = require("express").Router();
const db = require("../models/");


// Finds data for getting all workouts
router.get("/api/workouts", (req, res) => {
	db.Workout.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Get route for specific workout
router.get("/api/workouts/range", (req, res) => {
	db.Workout.find()
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Post route to create workout
router.post("/api/workouts", ({ body }, res) => {
	db.Workout.create(body)
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Put route to find and update workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
	db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
		.then((dbData) => {
			res.json(dbData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Export API routes
module.exports = router;
