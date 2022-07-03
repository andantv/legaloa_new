const mongoose = require("mongoose");

const Document = mongoose.model(
  "Document",
  new mongoose.Schema({
    title: String,
    dateAdoption: String,
    dateVigueur: String,
    dateEnregistrement: String,
    numero: Number,
    route: String,
    description: String,
    articles: [
      {
        title: String,
        numero: Number
      }
    ],
    domaine:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Domaine"
    },
    organisme:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organisme"
    },
    status:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Status"
    },
    type:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Type"
    }
  })
);

module.exports = Document;