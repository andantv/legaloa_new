module.exports = app => {
  const domaines = require("../controllers/domaine.controller");
  const { authJwt } = require("../middlewares");
  var router = require("express").Router();
  // Create a new domaines
  router.post("/",domaines.create);
  // Retrieve all domaines
  router.get("/", domaines.findAll);
  // Retrieve a single domaines with id
  router.get("/:id", domaines.findOne);
  // Update a domaines with id
  router.put("/:id", domaines.update);
  // Delete a domaines with id
  router.delete("/:id",domaines.delete);
  // Get all domaines
  router.delete("/",domaines.deleteAll);
  app.use('/api/domaines',
  //[authJwt.verifyToken, authJwt.isAdmin],
   router);
};