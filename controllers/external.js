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
      // res.json(error);
      res.json(error);
    });
 }

function spotifyThis() {
  let searchQuery;

  if (!searchQuery) {
    console.log('You forgot to search for a song.');
    return false;
  }

  spotify
    .search({
      type: 'artist',
      query: searchQuery,
    })
    .then((response) => {
      const artist = response.tracks.items[0].artists[0].name;
      const title = response.tracks.items[0].name;
      const album = response.tracks.items[0].album.name;
      const previewLink = response.tracks.items[0].preview_url;

      console.log(`
      Artist: ${artist}
      Song Title: ${title}
      Album Name: ${album}
      Preview: ${previewLink}
`);
    })
    .catch((err) => {
      console.log(err);
    });
}

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