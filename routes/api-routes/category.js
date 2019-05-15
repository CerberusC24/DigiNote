const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {newCategory, getAllCategories, getPostbyCategory} = require("../../controllers/category")

router 
  .route("/")
  .get(withAuth, getAllCategories)
  .post(withAuth, newCategory);

  router
  .route("/:name")
  .get(withAuth, getPostbyCategory)

  module.exports = router;