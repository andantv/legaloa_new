const mongoose = require("mongoose");

const Domaine = mongoose.model(
  "Domaine",
  new mongoose.Schema({
    title: String
  })
);

module.exports = Domaine;