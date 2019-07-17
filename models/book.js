const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: Array,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.export = Book;

// 4. At a minimum, books should have each of the following fields:

// - `title` - Title of the book from the Google Books API

// - `authors` - The books's author(s) as returned from the Google Books API

// - `description` - The book's description as returned from the Google Books API

// - `image` - The Book's thumbnail image as returned from the Google Books API

// - `link` - The Book's information link as returned from the Google Books API
