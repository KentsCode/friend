var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
var fs = require('fs');

const app = express();

require('./routing/htmlRoutes.js')(app);
require('./routing/apiRoutes.js')(app);
var friends = require("./data/friends.js");
app.use(express.static("./public"));

var PORT = process.env.PORT || 3000;

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});