const { Router } = require('express');
const userRouter = Router();

const { signUp, login } = require('../controllers/user-controller');

userRouter.post('/signup', signUp);
userRouter.post('/login', login);

module.exports = userRouter;
