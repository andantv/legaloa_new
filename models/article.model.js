const mongoose = require("mongoose");

const Article = mongoose.model(
  "Article",
  new mongoose.Schema({
    title: String,
    numero: Number
  })
);

module.exports = Article;