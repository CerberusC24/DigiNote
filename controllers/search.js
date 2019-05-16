/* eslint-disable indent */
/* eslint-disable eol-last */
const axios = require('axios');

const titleQuery = 'harry potter';
const authorQuery = 'jk rowling';
// GET books at '/api/search/books'
// set up query params for intitle && inauthor
// i.e. /api/search/books?intitle=harry+potter&inauthor=jk+rowling => req.query
// req.query = {intitle: "harry potter", inauthor: "jk rowling"}
function callBook(req, res) {
  axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: req.query
      },
    }).then((response) => {
      console.log(JSON.stringify(response.data, null, 2));
    })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
}

callBook();

module.exports = callBook;