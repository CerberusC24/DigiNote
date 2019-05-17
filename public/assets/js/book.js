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
  $('#submit-content').on('click', (event) => {
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
        console.log(response);
        const data = response.items[0].volumeInfo
        const bookContentDiv = $("<div>");
        bookContentDiv.attr("data-title", bookObj.title);
        bookContentDiv.attr("data-author", bookObj.author);
        bookContentDiv.text(`${data.title} by ${data.authors[0]}
        Date published: ${data.publishedDate} Pages: ${data.pageCount} Book Rating: ${data.averageRating}`)
        $("#book-content").append(bookContentDiv);

        console.log(bookObj);
      })
      .catch(function (err) {
        console.log(err);
      });
  });

});
