var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("./public"));

require('./routing/htmlRoutes.js')(app);
require('./routing/apiRoutes.js')(app);

//var friends = require("./data/friends.js");

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});