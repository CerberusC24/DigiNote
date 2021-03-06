const jwt = require("jsonwebtoken");
const {
  Img
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

// delete user Img
const deleteUserImg = async (req, res) => {
  Img.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(dbImgData => res.json(dbImgData))
    .catch(err => res.json(err));
}

module.exports = {
  newImg,
  getAllImg,
  deleteUserImg
};