const axios = require("axios");
const dotenv = require("dotenv").config();
const Spotify = require("node-spotify-api");
let spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});


// GET '/api/searchsong' 
// Parameters = artist & track
// example of query => localhost:3000/api/searchsong?artist=beatles&track=come+together
const searchSpotify = (req, res) => {
  
  const {
    artist,
    track
  } = req.query;

  const queryString = `https://api.spotify.com/v1/search?type=track&q=artist:${artist} track:${track}`

  spotify.request(queryString, function(err, data){
    if (err){
      console.log(err);
      return res.json(err);
    }
  
    res.json(data);
  });


}

module.exports = {
  searchSpotify
};
