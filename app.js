var express = require("express");
var bodyParser = require("body-parser");
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
var routes = require("./routes/routes.js")(app);

var portNumber = process.argv.length > 2 ? process.argv[2] : 3000
 
var server = app.listen(portNumber, function () {
    console.log("Listening on port %s...", server.address().port);
});