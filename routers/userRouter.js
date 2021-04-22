const express = require('express');
const { register, login, logout, getCurrentUser, FavBook } = require('../controllers/userController');
const checkAuthentication = require('../middleware/checkAuthentication');

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/FavBook/:id', checkAuthentication, FavBook);
userRouter.post('/logout', checkAuthentication, logout);
//get
userRouter.get('/', checkAuthentication, getCurrentUser);

module.exports = userRouter;
