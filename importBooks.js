// I created this file to import the json file books.json into the database
//i had problem with cosmos db (1000 req limit )so i used mongodb atlas
//Mohammad Kazemi 301313841 23/06/2023
const mongoose = require('mongoose');
const fs = require('fs');

// Load the existing Book model
const Book = require('./server/models/books');

// Load the database connection string
const db = require('./server/config/db');
//db 
mongoose.connect(db.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Read the JSON file
fs.readFile('mebooks.json', 'utf8', (err, data) => {
  if (err) throw err;
  
//   const books = JSON.parse(data).books;
    const books = JSON.parse(data);

  // Save each book in the database
  books.forEach(book => {
    const newBook = new Book(book);
    newBook.save();
  });

  console.log('Books imported successfully');
});
