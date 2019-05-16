// List Required Dependencies
// =============================================================
var path = require("path");
var router = require('express').Router();

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads home page
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public/assets/html/index.html"));
});

// dashboard route loads the user dashboard page
router.get("/dashboard", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public/assets/html/dashboard.html"));
});

// media route loads media.html
router.get("/media", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public/assets/html/media.html"));
});

module.exports = router;