const jwt = require("jsonwebtoken");
const {
  Post, Category
} = require("../models");

// create a new category
const newCategory = (req, res) => {
  const {
    categoryTitle
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

// delete user categories
const deleteUserCategory = async (req, res) => {
  Category.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => res.json(err));
}

// exporting

module.exports = {
  newCategory,
  getAllCategories,
  getPostbyCategory,
  deleteUserCategory
};