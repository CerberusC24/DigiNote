const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  getUserInfo,
  login,
  register,
  deleteUser
} = require("../../controllers/users")

router
  .route("/")
  .get(withAuth, getUserInfo);
router
  .route("/login")
  .post(login);
router
  .route("/register")
  .post(register);
router
  .route("/delete/:id")
  .delete(withAuth, deleteUser)

module.exports = router;