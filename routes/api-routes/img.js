const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {newImg, getAllImg} = require("../../controllers/img")

router 
  .route("/")
  .get(withAuth, getAllImg);

router 
  .route("/")
  .post(withAuth, newImg);

  module.exports = router;