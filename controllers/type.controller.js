const db = require("../models");
const Type = db.type;

// Create and Save a new Type
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Organisme
  const type = new Type({
    title: req.body.title
    });

  // Save Type in the database
  type
    .save(type)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the organisme."
      });
    });
};

// Retrieve all Type from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Type.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Organisme."
      });
    });
};

// Find a single Type with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Type.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Type with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Status with id=" + id });
    });
};

// Update a Status by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Type.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Type with id=${id}. Maybe Type was not found!`
        });
      } else res.send({ message: "Type was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Type with id=" + id
      });
    });
};

// Delete a Type with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Type.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Type with id=${id}. Maybe Type was not found!`
        });
      } else {
        res.send({
          message: "Type was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Type with id=" + id
      });
    });
};

// Delete all Type from the database.
exports.deleteAll = (req, res) => {
  Type.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Type were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Type."
      });
    });
};

// Find all published Type
exports.findAllPublished = (req, res) => {
  Type.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Types."
      });
    });
};