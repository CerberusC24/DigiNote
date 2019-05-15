const jwt = require("jsonwebtoken");
const {
  User, Post, Book, Category, Img, Song, Video
} = require("../models");

// create a new Img
const newImg = (req, res) => {
  const {
    url
  } = req.body;
  Img.create({
    url
    })
    .then(dbImgData => res.json(dbImgData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all Img
const getAllImg = async (req, res) => {
  Img.findAll({

  })
  .then(dbImgData => res.json(dbImgData))
  .catch(err => res.json(err));
}

module.exports = {
  newImg,
  getAllImg
};