var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routing/htmlRoutes.js')(app);
require('./routing/apiRoutes.js')(app);

var friends = require("./data/friends.js");

app.use(express.static("./public"));

app.listen(port, function() {
    console.log("App listening on PORT " + port);
});