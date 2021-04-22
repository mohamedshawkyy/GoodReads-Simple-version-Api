const express = require('express');
const BooksController = require('../controllers/BooksController'); 

const BooksRouter = express.Router();
BooksRouter.post('/addbook',BooksController.Addbook);
//get
BooksRouter.get('/allBooks',BooksController.GetAllbooks);
module.exports = BooksRouter; 