var express = require("express");
var app = express();
var friends = require("../data/friends.js");


var bodyParser = require("body-parser");
var path = require("path");

var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("../public"));

app.use("/survey", function(req, res) {
    res.sendFile("public/survey.html", { root: "../"});
  });

app.get("/api/friends", function(req, res) {
    res.send(friends);
});

app.post("/api/friends", function(req, res) {
    
});

app.all("*", function(req, res) {
    res.sendFile("public/home.html", { root: "../"});
});

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});