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

    $.post("/api/book", bookObj)
      .then(function () {
        const bookContentDiv = $("<div>");
        bookContentDiv.attr("data-title", bookObj.title);
        bookContentDiv.attr("data-author", bookObj.author);
        bookContentDiv.text(`${bookObj.title} by ${bookObj.author}`)
        $("#book-content").append(bookContentDiv);

        console.log(bookContentDiv);
        console.log(bookObj);
      })

  });

});