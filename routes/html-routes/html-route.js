// List Required Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/assets/html/index.html"));
  });

  // dashboard route loads the user dashboard page
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/assets/html/dashboard.html"));
  });

  // media route loads media.html
  app.get("/media", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/assets/html/media.html"));
  });
};
