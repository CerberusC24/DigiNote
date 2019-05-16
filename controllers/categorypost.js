const jwt = require("jsonwebtoken");
const {
  CategoryPost
} = require("../models");

// create a new BookPost
const newCategoryPost = (req, res) => {
  const {
  PostId, CategoryId
  } = req.body;
  CategoryPost.create({
      PostId, CategoryId
    })
    .then(dbCategoryIdData => res.json(dbCategoryIdData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all books related to posts
const getAllCategoryPost = async (req, res) => {
  BookPost.findAll({
    where: {
      PostId: req.params.postid
    }
  })
  .then(dbCategoryIdData => res.json(dbCategoryIdData))
  .catch(err => res.json(err));
}

// get back posts related to books

const getAllPostCategory = async(req, res) => {
  BookPost.findAll({
    where: {
      BookId: req.params.categoryid
    }
  })
  .then(dbCategoryIdData => res.json(dbCategoryIdData))
  .catch(err => res.json(err));
}

// exporting

module.exports = {
  getAllCategoryPost,
  getAllPostCategory,
  newCategoryPost
};