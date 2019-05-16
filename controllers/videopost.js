const jwt = require("jsonwebtoken");
const {
  VideoPost
} = require("../models");

// create a new Video
const newVideoPost = (req, res) => {
  const {
    VideoId, PostId
  } = req.body;
  VideoPost.create({
    VideoId, PostId
    })
    .then(dbVideoData => res.json(dbVideoData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all Videos related to posts
const getAllVideoPost = async (req, res) => {
  VideoPost.findAll({
    where: {
      PostId: req.params.postid
    }
  })
  .then(dbVideoPostData => res.json(dbVideoPostData))
  .catch(err => res.json(err));
}

// get back posts related to Videos

const getAllPostVideo = async(req, res) => {
  VideoPost.findAll({
    where: {
      VideoId: req.params.videoid
    }
  })
  .then(dbVideoPostData => res.json(dbVideoPostData))
  .catch(err => res.json(err));
}

module.exports = {
  newVideoPost,
  getAllVideoPost,
  getAllPostVideo,

};