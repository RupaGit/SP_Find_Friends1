var express = require('express');

var getFriends = require('../data/friends.json');



module.exports = function(app){
    app.get('/api/friends', function (req, res) {
        // console.log("I made it");
        return res.json(getFriends);
    });
    app.post('/api/friends', function (req, res) {
        var newFriendScores = req.body.scores;
        var resultArray = [];
        getFriends.forEach(element => {
            var diff = 0; 
            for(var i=0; i<element.scores.length; i++){
                diff = diff +(element.scores[i] - newFriendScores[i]);
            }
            resultArray.push(Math.abs(diff));
        }); 
        console.log(resultArray);
        var matchedFriendIndex = resultArray.indexOf(Math.min(...resultArray));
        return res.json(getFriends[matchedFriendIndex]);
    });
}


