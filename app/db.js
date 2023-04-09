const env = require("../config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = env.config.DATABASE_URL;
db.users = require("./models/user")(mongoose);

module.exports = db;