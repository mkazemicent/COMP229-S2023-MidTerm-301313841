let mongoose = require('mongoose');
//Mohammad Kazemi
// create a model class
//add favourite to the schema
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String,
    Favourite: {type: Boolean, default: false}
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
