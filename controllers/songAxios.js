

const axios = require("axios");

const dotenv = require("dotenv").config();

const songURL = "https://api.spotify.com"

let spotify = require("node-spotify-api");

let spotify = new spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});
console.log(spotify)

spotify.search({type: "artist", query: "" }, function(err, data){
  if (err){
    return console.log(`Error occured: ` + err)
  }

  console.log(data)
});
