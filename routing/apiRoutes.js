var express = require("express");
var app = express();
var fs = require('fs');

var friends = require("../data/friends.js");

var bodyParser = require("body-parser");
var path = require("path");

var jsonParser = bodyParser.json();

module.exports = function sendFriendsList(app){
    app.get("/api/friends", function(req, res) {
        res.send(friends);
    });
    app.post("/api/friends",  jsonParser, function(req, res) {
        // console.log(req.body);
        friends.push(req.body);
        // console.log(friends);
    });
}