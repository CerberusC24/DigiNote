const jwt = require("jsonwebtoken");
const { User } = require("../models");
const handle = require("../utilities/promise-handler");

const secret = process.env.jwt_pwd;

// registering a new user
const register = (req, res) => {
  const {email, firstName, lastName, password} = req.body;
  User.create({
    email,
    firstName,
    lastName,
    password
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
};

// logging in an existing user
const login = async (req, res) => {
  // getting email and password
  const {email, password} = req.body;

  // find the user
  const [findUserErr, userInfo] = await handle(User.findOne({ email }));

  if (findUserErr){
    console.log(findUserErr);
    res.status(500).json({
      error: "Ooops! Our bad. Please try again!"
    })
  }
  else if (!userInfo){
    res.status(401).json({
      error: "Uh-oh, it seems like you have the wrong email."
    })
  }
  else {
    const [pwErr, same] = await handle(userInfo.validPassword(password));

    if (pwErr){
      res.status(500).json({
        error: "Our mistake, please try again"
      });
    }
    else if (!same){
      res.status(401).json({
        error: "Hm, it seems like your password wasn't quite right"
      });
    }
    else {
      const payload = {
        id: userInfo.id,
        email: userInfo.email
      };
      // assign jwt
      const token = jwt.sign(payload, secret, {
        expiresIn: "1h"
      });

      // sending webtoken to the front end
      res.status(200).json(token);
    };
  };
};

// getting the user information
const getUserInfo = async (req, res) => {
  const [userErr, userInfo] = await (User.findOne({id: req.id}));

  if (userErr){
    res.status(500).json(userErr);
  }
  else {
    res.status(200).json(userInfo);
  }
};

// exporting

module.exports = {
  getUserInfo,
  login,
  register
};