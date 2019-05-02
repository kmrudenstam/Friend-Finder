// Dependencies
var express = require("express");
var path = require("path");

// Sets up Express App
var app = express();
var PORT = 2000;

// Sets up Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add the application routes
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);

// Access CSS files
app.use(express.static(path.join(__dirname, "./app/public")));

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});