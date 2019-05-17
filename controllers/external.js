/* eslint-disable indent */
/* eslint-disable eol-last */
require('dotenv').config();
const axios = require('axios');
const Spotify = require('node-spotify-api');
const keys = require('../keys');

const spotify = new Spotify(keys.spotify);

function callBook(req, res) {
  console.log(req.query);
  const {
    title,
    author
  } = req.query;

  const query = `inauthor:${author}+intitle:${title}`;

  axios.get('https://www.googleapis.com/books/v1/volumes', {
    params: {
      q: query
    },
  }).then((response) => {
    res.json(response.data);
  })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
}

// GET '/api/searchsong'
// Parameters = artist & track
// example of query => localhost:3000/api/searchsong?artist=beatles&track=come+together
const spotifyThis = (req, res) => {
  const {
    artist,
    track
  } = req.query;

  const queryString = `https://api.spotify.com/v1/search?type=track&q=artist:${artist}&track:${track}`;

  spotify.request(queryString, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }

    res.json(data);
  });
};

function movieThis() {
  let searchQuery;

  if (!searchQuery) {
    console.log('You forgot to search for a movie title');
    return false;
  }

  axios
    .get(`http://www.omdbapi.com/?t=${searchQuery}&apikey=${OMDB_API_KEY}`)
    .then((response) => {
      console.log(`
      Movie Title: ${response.data.Title}
      Release Date: ${moment(response.data.Released, 'DD MMM YYYY').format('MM-DD-YYYY')}
      IMDB Rating: ${response.data.Ratings[0].Value}
      Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}
      Country of Origin: ${response.data.Country}
      Language: ${response.data.Language}
      Plot Summary: ${response.data.Plot}
      Actors: ${response.data.Actors}
`);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  spotifyThis,
  movieThis,
  callBook
};