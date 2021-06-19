const bcrypt = require('bcrypt');
const validator = require('validator');
const User = require('../models/User');

const keys = require('../config/keys');

async function signUp(req, res) {
  try {
    const { username, email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.sendStatus(400);
    }
    const hashPassword = await bcrypt.hash(password, keys.SALT_ROUND);
    const newUser = await new User({
      email,
      username,
      password: hashPassword,
    });

    await newUser.save();
    res.send(newUser).status(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const match = await User.findOne({ email });

    if (!match) {
      return res.sendStatus(404);
    }

    const isValid = await bcrypt.compare(password, match.password);
    if (!isValid) {
      return res.sendStatus(400);
    }

    return res.send({ match });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = {
  signUp,
  login,
};
