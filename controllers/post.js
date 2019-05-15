const jwt = require("jsonwebtoken");
const {
  User, Post, Book, Category, Img, Song, Video
} = require("../models");

// create a new post
const newPost = (req, res) => {
  const {
    title,
    body
  } = req.body;
  Post.create({
      title,
      body,
      UserId: req.id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// getting the user's posts
const getUserPosts = async (req, res) => {
  console.log(req.id);
  Post.findAll({
    where: {
      UserId: req.id
    },
    // include post
    include: [{ all: true, nested: true }]
    // // end include post
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => res.json(err));
};

// exporting

module.exports = {
  newPost,
  getUserPosts
};