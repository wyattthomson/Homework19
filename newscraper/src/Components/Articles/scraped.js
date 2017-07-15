var mongoose = require ("mongoose");
mongoose.connect("mongod://localhost/newscraper");

var db = mongoose.connection;

