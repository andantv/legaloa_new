const mongoose = require("mongoose");

const Type = mongoose.model(
  "Type",
  new mongoose.Schema({
    title: String,
    description: String
  })
);

module.exports = Type;