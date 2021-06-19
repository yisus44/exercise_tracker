const Workout = require('../models/Workout');
const User = require('../models/User');

async function addWorkout(req, res) {
  const { duration, description, authorID } = req.body;
  try {
    const authorExists = await User.findById(authorID).exec();

    if (!authorExists) return res.sendStatus(400);

    if (duration && description && authorExists) {
      const newWorkout = await new Workout({
        duration,
        description,
        author: authorID,
      });
      await newWorkout.save();
      res.send(newWorkout);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getWorkouts(req, res) {
  const { authorID } = req.params;
  try {
    const matchs = await Workout.find({ author: authorID });
    if (!matchs) {
      return res.sendStatus(404).send({});
    }
    console.log(matchs);
    return res.send(matchs);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function updateWorkout(req, res) {
  const { workoutID } = req.params;
  try {
    const matchs = await Workout.findOneAndUpdate({ _id: workoutID }, req.body);
    if (!matchs) {
      return res.sendStatus(404).send({});
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = {
  addWorkout,
  getWorkouts,
  updateWorkout,
};
