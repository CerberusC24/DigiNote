const jwt = require("jsonwebtoken");
const {
  User, Post, Book, Category, Img, Song, Video
} = require("../models");

// create a new book
const newBook = (req, res) => {
  const {
    title, authors, pages, year, plot, rating
  } = req.body;
  Book.create({
    title, authors, pages, year, plot, rating
    })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all books
const getAllBooks = async (req, res) => {
  Book.findAll({

  })
  .then(dbBookData => res.json(dbBookData))
  .catch(err => res.json(err));
}

// delete book
const deletePostBook = async (req, res) => {
  Post.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => res.json(err));
}

module.exports = {
  newBook,
  getAllBooks,
  deletePostBook
};