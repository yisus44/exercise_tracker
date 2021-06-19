const express = require('express');
const helmet = require('helmet');
const app = express();
const path = require('path');

const userRouter = require('./routes/user-router');
const workoutRouter = require('./routes/workout-router');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './client/index.html'));
});

app.use(workoutRouter);
app.use(userRouter);

module.exports = { app };
