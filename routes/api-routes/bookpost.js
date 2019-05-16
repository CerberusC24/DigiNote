const jwt = require("jsonwebtoken");
const {
  Post, Book
} = require("../models");

// create a new category
const newBookPost = (req, res) => {
  const {
    BookId, PostId
  } = req.body;
  Category.create({
      categoryTitle,
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all categories
const getAllCategories = async (req, res) => {
  Category.findAll({

  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => res.json(err));
}

// getting the user's categories
const getPostbyCategory = async (req, res) => {
  Category.findAll({
    where: {
      categoryTitle: req.params.name
    },
    // include post
    include: [Post]
    // // end include post
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => res.json(err));
};

// exporting

module.exports = {
  newCategory,
  getAllCategories,
  getPostbyCategory
};