const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  Title: { type: String, required: true, minLength: 3, maxLength: 20 },
  Author: { type: String, required:true ,minLength: 3, maxLength: 20  },
 // BookList: { type: mongoose.SchemaTypes.ObjectId, ref: 'BookList' }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;