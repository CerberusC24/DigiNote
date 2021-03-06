/* eslint-disable eol-last */
/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable prefer-arrow-callback */

// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require('express');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;
console.log(`Port: ${PORT}`)

const routes = require("./routes");

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// Static directory
app.use(express.static('public'));
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});