/* eslint-disable indent */
/* eslint-disable eol-last */
const axios = require('axios');

// GET books at '/api/search/books'
// set up query params for intitle && inauthor
// i.e. /api/search/books?intitle=harry+potter&inauthor=jk+rowling => req.query
// req.query = {intitle: "harry potter", inauthor: "jk rowling"}
function callBook(req, res) {
  axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: req.query,
    }).then((response) => {
      console.log(JSON.stringify(response.data.items, null, 2));
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
}

callBook();