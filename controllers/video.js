const jwt = require("jsonwebtoken");
const {
  User, Post, Book, Category, Img, Song, Video
} = require("../models");

// create a new Video
const newVideo = (req, res) => {
  const {
    url
  } = req.body;
  Video.create({
    url
    })
    .then(dbVideoData => res.json(dbVideoData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all Videos
const getAllVideos = async (req, res) => {
  Video.findAll({

  })
  .then(dbVideoData => res.json(dbVideoData))
  .catch(err => res.json(err));
}

module.exports = {
  newVideo,
  getAllVideos
};