//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// Sets initial port
 var PORT = process.env.PORT || 3000;

 // Body Parser configuration
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true}));
 app.use(bodyParser.text());
 app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Routing

// Listens for port
 app.listen(PORT, function()  {
 	console.log("App listening on port: " + PORT);
 })