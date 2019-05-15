const router = require("express").Router();
const withAuth = require("../../middleware/authentication");


const { getUserInfo, login, register} = require("../../controllers/users")

router 
  .route("/")
  .get(withAuth, getUserInfo);

router 
  .route("/login")
  .post(login);

router 
  .route("/register")
  .post(register);

  module.exports = router;
