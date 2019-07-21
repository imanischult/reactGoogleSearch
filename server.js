const express = require("express");
const mongoose = require("mongoose");

const path = require("path");
const PORT = process.env.PORT || 3001;

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  authors: Array,
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model("Book", bookSchema);
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/books", function(req, res) {
  Book.find({}, function(err, books) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    return res.json(books);
  });
});

app.post("/api/books", function(req, res) {
  Book.create(req.body);
  return res.sendStatus(201);
});

app.delete("/api/books/:id", function(req, res) {
  Book.findByIdAndRemove(req.params.id, function() {
    return res.sendStatus(204);
  });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
