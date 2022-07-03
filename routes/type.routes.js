module.exports = app => {
  const types = require("../controllers/type.controller");
  const { authJwt } = require("../middlewares");
  var router = require("express").Router();
  // Create a new types
  router.post("/",types.create);
  // Retrieve all types
  router.get("/", types.findAll);
  // Retrieve a single types with id
  router.get("/:id", types.findOne);
  // Update a types with id
  router.put("/:id", types.update);
  // Delete a types with id
  router.delete("/:id",types.delete);
  // Get all types
  router.delete("/",types.deleteAll);
  app.use('/api/types',
  //[authJwt.verifyToken, authJwt.isAdmin],
   router);
};