const jwt = require("jsonwebtoken");
const {
  Movie
} = require("../models");

// create a new Movie
const newMovie = (req, res) => {
  const {
    url
  } = req.body;
  Movie.create({
    url
    })
    .then(dbMovieData => res.json(dbMovieData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all Movies
const getAllMovies = async (req, res) => {
  Movie.findAll({

  })
  .then(dbMovieData => res.json(dbMovieData))
  .catch(err => res.json(err));
};

// delete user Movies
const deleteUserMovie = async (req, res) => {
  Movie.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(dbVidData => res.json(dbVidData))
    .catch(err => res.json(err));
}

module.exports = {
  newMovie,
  getAllMovies,
  deleteUserMovie
};