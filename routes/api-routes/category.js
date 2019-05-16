const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newCategory,
  getAllCategories,
  getPostbyCategory,
  deleteUserCategory
} = require("../../controllers/category")

router
  .route("/")
  .get(withAuth, getAllCategories)
  .post(withAuth, newCategory);
router
  .route("/delete/:id")
  .get(withAuth, getPostbyCategory)
  .delete(withAuth, deleteUserCategory);

module.exports = router;