$(document).ready(() => {

  // $.get("/api/all", function (data) {

  //   if (data.length !== 0) {

  //     for (var i = 0; i < data.length; i++) {

  //       var row = $("<div>");
  //       row.addClass("chirp");

  //       row.append("<p>" + data[i].author + " chirped.. </p>");
  //       row.append("<p>" + data[i].body + "</p>");
  //       row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

  //       $("#chirp-area").prepend(row);

  //     }

  //   }

  // });

  // add new book
  $('#search-book').on('click', (event) => {
    event.preventDefault();

    const bookObj = {
      title: $('#book-title').val().trim(),
      author: $('#book-author').val().trim()
    };

    $.ajax({
      url: `/api/search/book?title=${bookObj.title}&author=${bookObj.author}`,
      method: 'get',
    })
      .then(function (response) {
        const data = response.items[0].volumeInfo
        const bookContentDiv = $(`<div class="mb-3">`);
        bookContentDiv.attr("data-title", bookObj.title);
        bookContentDiv.attr("data-author", bookObj.author);
        bookContentDiv.text(`${data.title} by ${data.authors[0]}
        Date published: ${data.publishedDate} Pages: ${data.pageCount} Book Rating: ${data.averageRating}`)
        $("#book-card").append(bookContentDiv);

        var bookInput =
        {
          title: bookObj.title,
          authors: bookObj.author,
          pages: data.pageCount,
          year: data.publishedDate,
          plot: data.description,
          rating: data.averageRating
        };

        // get access token
        const token = localStorage.getItem("accessToken");

        $.ajax({
          url: "/api/book",
          method: "POST",
          data: bookInput,
          headers: {
            authorization: `Bearer ${token}`
          }
        }).then(function (bookData) {
          console.log(bookData)
        });
      }).catch(function (err) {
        console.log(err);
      });
  });
});

