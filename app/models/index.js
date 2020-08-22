const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.book = require("./book");
db.customer = require("./customer");

module.exports = db;