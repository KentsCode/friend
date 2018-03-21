var friends = require("../data/friends.js");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json()

module.exports = function sendFriendsList(app){
    app.get("/api/friends", function(req, res) {
        res.send(friends);
    });

    app.post("/api/friends", jsonParser, function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        console.log(req.body);
        var incomingObject = Object.keys(req.body)[0];
        var currentSub = JSON.parse(incomingObject);
        var currentHighScore = 50;
        var currentHighScorer = currentSub.name;
        var highScorePosition = 0;
        for (i = 0; i < friends.length; i++) {
            var currentScore
            var comparedFriend = friends[i].scores;
            var totalDiff = 0;
            for (j = 0; j < comparedFriend.length; j++) {
                var diff = Math.abs(comparedFriend[j] - currentSub.scores[j]);
                totalDiff = totalDiff + diff;
            }
            if (totalDiff < currentHighScore) {
                currentHighScorer = friends[i].name;
                currentHighScore = totalDiff;
                highScorePosition = i;
                totalDiff = 0;
            } else {
                totalDiff = 0;
            }
        }

        res.send(friends[highScorePosition]);
        friends.push(currentSub);
        res.end("done");
    });
}