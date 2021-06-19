const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const workoutSchema = new mongoose.Schema({
  duration: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  author: {
    type: ObjectId,
    required: true,
  },
});

const Workout = new mongoose.model('Workout', workoutSchema);

module.exports = Workout;
