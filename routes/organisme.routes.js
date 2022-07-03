module.exports = app => {
  const organismes = require("../controllers/organisme.controller");
  const { authJwt } = require("../middlewares");
  var router = require("express").Router();
  // Create a new organismes
  router.post("/",organismes.create);
  // Retrieve all organismes
  router.get("/", organismes.findAll);
  // Retrieve a single organismes with id
  router.get("/:id", organismes.findOne);
  // Update a organismes with id
  router.put("/:id", organismes.update);
  // Delete a organismes with id
  router.delete("/:id",organismes.delete);
  // Get all organismes
  router.delete("/",organismes.deleteAll);
  app.use('/api/organismes',
  //[authJwt.verifyToken, authJwt.isAdmin],
   router);
};