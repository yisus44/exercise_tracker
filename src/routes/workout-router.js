const { Router } = require('express');
const workoutRouter = Router();

const {
  addWorkout,
  getWorkouts,
  updateWorkout,
} = require('../controllers/workout-controller');

workoutRouter.post('/workout/add', addWorkout);
workoutRouter.get('/workout/:authorID', getWorkouts);
workoutRouter.put('/workout/:workoutID', updateWorkout);
module.exports = workoutRouter;
