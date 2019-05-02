
// Dependencies
var path = require("path");
var friends = require("../data/friends.js");

// Routing
module.exports = function (app) {
    // API GET Request
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        var userResponse = userInput.scores;

        // Match Friend
        var matchName = "";
        var matchPhoto = "";
        var difference = 1000;

        // Loop through existing friends and compare scores
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < userResponse.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponse[j]);
            }

            // Find friend with most similar answers
            if (diff < difference) {
                difference = diff;
                matchName = friends[i].name;
                matchPhoto = friends[i].photo;

            }
        }

        // Add new user
        friends.push(userInput);
        res.json({ status: "OK", matchName: matchName, matchPhoto: matchPhoto });
    });
};