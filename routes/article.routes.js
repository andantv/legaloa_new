module.exports = app => {
  const articles = require("../controllers/article.controller");
  const { authJwt } = require("../middlewares");
  var router = require("express").Router();
  // Create a new article
  router.post("/",articles.create);
  // Retrieve all articles
  router.get("/", articles.findAll);
  // Retrieve a single article with id
  router.get("/:id", articles.findOne);
  // Update a article with id
  router.put("/:id", articles.update);
  // Delete a article with id
  router.delete("/:id",articles.delete);
  // Get all articles
  router.delete("/",articles.deleteAll);
  app.use('/api/articles',
  //[authJwt.verifyToken, authJwt.isAdmin],
   router);
};