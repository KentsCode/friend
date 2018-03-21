var friends = require("../data/friends.js");

module.exports = function sendFriendsList(app){
    app.get("/api/friends", function(req, res) {
        res.send(friends);
    });

    app.post("/api/friends", function(req, res) {
        //res.setHeader('Content-type', 'application/json');
        console.log(req.body);
        console.log(JSON.parse(req.body));
        //var currentSub = req.body.scores;
        /*var currentHighScore = 0;
        var currentHighScorer = req.body.name;
        console.log(friends);
        console.log("length of friends " + friends.length);*/
        /*for (i = 0; i < friends.length; i++) {
            var comparedFriend = friends[i].scores;
            console.log("friend compared " + comparedFriend.length);
            var totalDiffA = 0;
            for (j = 0; j < comparedFriend.length; j++) {
                console.log(req.body);
                console.log(" c friend" + comparedFriend[j]);
               // var diff = comparedFriend[j] - currentSub[j];
            }
            var totalDiffB = 0;
            if (totalDiffA > totalDiffB) {
                totalDiffA = totalDiffB;
                totalDiffB = 0;
                currentHighScorer = friends[i].name;
            } else {
                totalDiffB = 0;
            }
        }*/
        //console.log("highest scorer " + currentHighScorer);
        //console.log("highest score " + currentHighScore);

        friends.push(req.body);
        
        //console.log(friends[friends.length]);

        res.end("done");
    });
}