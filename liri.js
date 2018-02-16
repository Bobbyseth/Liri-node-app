require("dotenv").config();
// var keys = require("./keys.js");
// // var spotify = new Spotify(keys.spotify);
// var client = new twitter(keys.twitter);

console.log(process.argv);

var command = process.argv[2];

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'ZFkMbDRG6iD9B5W4HvMrUZqZb',
  consumer_secret: 'Ojofwod6tjtavWRQgC0jcu5ucLvlSxuEcWlaissItJVz8rNLxe',
  access_token_key: '1309127996-P3wmWbJs968RXhFkyTinFdm1LNrJbmBvlmfRvxb',
  access_token_secret: 'pFpsTJY3eHCTH6yzlprGDpGKNm7yIjeigo53M6QcX5RqE'
});

var params = {screen_name: 'Seth_Grizzle'};
function myTweets() {
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);
      console.log(tweets[i].created_at);
    }
  }
});
}

if (command === "myTweets") {
  myTweets();
}

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '38596091d6b147b88dde173f925e5aa6',
  secret: '0ab98e10a9b34fbc8c81868c50922eab'
});
function mySpotify() { 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
}

if (command === "mySpotify") {
  mySpotify();
}
