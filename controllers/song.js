const jwt = require("jsonwebtoken");
const {
  User, Post, Book, Category, Img, Song, Video
} = require("../models");

// create a new song
const newSong = (req, res) => {
  const {
    artist, title, date
  } = req.body;
  Song.create({
    artist, title, date
    })
    .then(dbSongData => res.json(dbSongData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all Songs
const getAllSongs = async (req, res) => {
  Song.findAll({

  })
  .then(dbSongData => res.json(dbSongData))
  .catch(err => res.json(err));
}

module.exports = {
  newSong,
  getAllSongs
};