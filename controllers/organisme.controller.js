const db = require("../models");
const Organisme = db.organisme;

// Create and Save a new Organisme
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Organisme
  const organisme = new Organisme({
    title: req.body.title
    });

  // Save organisme in the database
  organisme
    .save(organisme)
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

// Retrieve all organisme from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Organisme.find(condition)
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

// Find a single Organisme with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Organisme.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Organisme with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Organisme with id=" + id });
    });
};

// Update a Organisme by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Organisme.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Organisme with id=${id}. Maybe Organisme was not found!`
        });
      } else res.send({ message: "Organisme was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Organisme with id=" + id
      });
    });
};

// Delete a Organisme with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Organisme.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Organisme with id=${id}. Maybe Organisme was not found!`
        });
      } else {
        res.send({
          message: "Organisme was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not Organisme Tutorial with id=" + id
      });
    });
};

// Delete all Organisme from the database.
exports.deleteAll = (req, res) => {
  Organisme.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Organismes were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Organismes."
      });
    });
};

// Find all published Organismes
exports.findAllPublished = (req, res) => {
  Organisme.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};