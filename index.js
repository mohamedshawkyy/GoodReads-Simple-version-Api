const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const apiRouter = require('./routers/apiRouter');
const initMongoose = require('./initMongoose');
require('dotenv').config();

const { PORT, MONGO_URL } = process.env;

initMongoose(MONGO_URL);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRouter);

app.use((err, req, res, next) => {
  res.statusCode = err.statusCode;
  res.send(err);
});

app.listen(PORT, () => {
  console.log('listening on port:', PORT);
})