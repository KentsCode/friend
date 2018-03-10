var fs = require('fs');
var express = require("express");
var app = express();


module.exports = function directory(app){
    app.get("/survey", function(req, res) {
        res.sendFile("app/public/survey.html", { root: "../"});
        console.log("fire");
    });
    app.get("/", function(req, res) {
        res.sendFile("app/public/home.html", { root: "../"});
    });
}



/*
module.exports = function defaultRoute(app) {
    app.get("/*", function(req, res) {
        res.sendFile("app/public/home.html", { root: "../"});
    });
}*/