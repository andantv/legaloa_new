const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.article = require("./article.model");
db.document = require("./document.model");
db.domaine = require("./domaine.model");
db.organisme = require("./organisme.model");
db.status = require("./status.model");
db.type = require("./type.model");


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;