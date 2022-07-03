const mongoose = require("mongoose");

const Status = mongoose.model(
  "Status",
  new mongoose.Schema({
    title: String
  })
);

module.exports = Status;