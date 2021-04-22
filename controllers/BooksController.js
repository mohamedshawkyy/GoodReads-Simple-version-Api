const Books = require("../models/Book");
const { CustomError, internalServerError } = require('../models/customError');
const Book = require("../models/Book");

exports.Addbook = async function(req,res)
{
    var myBook = req.body; 
    if(!myBook)  throw internalServerError
    const {Title , Author} = myBook; 
   const book = new Book({Title , Author}); 
    try {
           await  book.save().catch(err => { throw internalServerError });
        res.send(book.toJSON());
    } catch (error) {
        throw error; 
    }

}

exports.GetAllbooks = async function(req,res)
{
    Book.find({},function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        res.send(docs);
    }
})
   //console.log(books);
    //res.send(books.toJSON());
}