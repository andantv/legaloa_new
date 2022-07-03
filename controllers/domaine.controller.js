const db = require("../models");
const Domaine = db.domaine;

// Create and Save a new domaine
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a domaine
  const domaine = new Domaine({
    title: req.body.title
    });

  // Save domaine in the database
  domaine
    .save(domaine)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the domaine."
      });
    });
};

// Retrieve all domaine from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Domaine.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Domaine."
      });
    });
};

// Find a single Domaine with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Domaine.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Domaine with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Domaine with id=" + id });
    });
};

// Update a Domaine by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Domaine.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Domaine with id=${id}. Maybe Domaine was not found!`
        });
      } else res.send({ message: "Domaine was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Domaine with id=" + id
      });
    });
};

// Delete a Domaine with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Domaine.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Domaine with id=${id}. Maybe Domaine was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Domaine with id=" + id
      });
    });
};

// Delete all Domaine from the database.
exports.deleteAll = (req, res) => {
  Domaine.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Domaine were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Domaines."
      });
    });
};

// Find all published Domaine
exports.findAllPublished = (req, res) => {
  Domaine.find({ published: true })
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