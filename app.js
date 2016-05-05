var express = require("express");
var bodyParser= require("body-parser");
var app = express();
var request = require("request");
var mongo = require('mongodb');
var myClient = mongo.MongoClient;
var url = "mongodb://bwalen:alookback@ds013162.mlab.com:13162/bwalen";
var port = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(express.static("./public"));

app.listen(port, function(){
  console.log("Listening on port " + port);
});
