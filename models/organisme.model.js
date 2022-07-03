const mongoose = require("mongoose");

const Organisme = mongoose.model(
  "Organisme",
  new mongoose.Schema({
    title: String
  })
);

module.exports = Organisme;