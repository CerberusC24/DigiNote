const jwt = require("jsonwebtoken");
const {
  BookPost
} = require("../models");

// create a new BookPost
const newBookPost = (req, res) => {
  console.log(req.body);
  const {
  BookId, PostId
  } = req.body;
  BookPost.create({
      BookId, PostId,
    })
    .then(dbBookPostData => res.json(dbBookPostData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all books related to posts
const getAllBookPost = async (req, res) => {
  BookPost.findAll({
    where: {
      PostId: req.params.postid
    }
  })
  .then(dbBookPostData => res.json(dbBookPostData))
  .catch(err => res.json(err));
}

// get back posts related to books

const getAllPostBook = async(req, res) => {
  BookPost.findAll({
    where: {
      BookId: req.params.bookid
    }
  })
  .then(dbBookPostData => res.json(dbBookPostData))
  .catch(err => res.json(err));
}

// exporting

module.exports = {
  getAllBookPost,
  getAllPostBook,
  newBookPost
};