var express = require("express");
var bodyParser= require("body-parser");
var app = express();
var request = require("request");
var mongo = require('mongodb');
var myClient = mongo.MongoClient;
var url = "mongodb://bwalen:alookback@ds013162.mlab.com:13162/bwalen";
var port = process.env.PORT || 1337;
var topScores;


app.use(bodyParser.json());
app.use(express.static("./public"));

app.get("/top", function(req, res){
  myClient.connect(url, function(error, database){
    if(!error){
      var snake = database.collection("snake");
      snake.find({}).toArray(function(err, docs){
        res.send(docs);
        database.close();
      });
    }
  })
})

app.listen(port, function(){
  console.log("Listening on port " + port);
});
