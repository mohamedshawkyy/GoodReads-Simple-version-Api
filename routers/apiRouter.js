const express = require('express');
const userRouter = require('./userRouter');
const BooksRouter = require('./BooksRouter');

const apiRouter = express.Router();

apiRouter.use('/user', userRouter);
apiRouter.use('/Book', BooksRouter);


module.exports = apiRouter;