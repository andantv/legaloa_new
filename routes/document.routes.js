module.exports = app => {
  const documents = require("../controllers/document.controller");
  const { authJwt } = require("../middlewares");
  var router = require("express").Router();
  // Create a new documents
  router.post("/",documents.create);
  // Retrieve all documents
  router.get("/", documents.findAll);
  // Retrieve a single documents with id
  router.get("/:id", documents.findOne);
  // Update a documents with id
  router.put("/:id", documents.update);
  // Delete a documents with id
  router.delete("/:id",documents.delete);
  // Get all documents
  router.delete("/",documents.deleteAll);
  app.use('/api/documents',
  //[authJwt.verifyToken, authJwt.isAdmin],
   router);
};