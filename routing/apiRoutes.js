var express = require("express");
const app = express();
var fs = require('fs');

var friends = require("../data/friends.js");

const bodyParser = require("body-parser");
var path = require("path");

var jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = function sendFriendsList(app){
    app.get("/api/friends", function(req, res) {
        res.send(friends);
    });
    app.post("/api/friends",  jsonParser, function(req, res) {
        res.setHeader('Content-type', 'application/json');
        console.log(req.body);
        friends.push(req.body);
        res.end("done");
        // console.log(friends);
    });
}