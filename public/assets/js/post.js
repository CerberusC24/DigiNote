$(document).ready(() => {

  // get access token
  const token = localStorage.getItem("accessToken");

  $.ajax({
    url: "/api/post",
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  }).then(function (postData) {

    for (let i = 0; i < postData.length; i++) {

      var postTitle = postData[i].title
      const $deleteBtn = $("<button>")
        .addClass("btn btn-sm btn-danger mt-2 align-items-center mr-3")
        .attr("database-id", `${postData[i].id}`)
        .attr("id", "deleteBtn")
        .text("X")
      const $cardTitle = $("<h5>")
        .addClass("card-title")
        .append(postTitle)
      const $cardText = $("<p>")
        .addClass("card-text mb-2")
        .text(postData[i].body)
        .attr("hidden")
      const $cardBody = $("<div>")
        .addClass("card-body")
        .append($cardTitle, $cardText, $deleteBtn);
      const $card = $("<div>")
        .addClass("card shadow bg-black-50 rounded ")
        .attr("style", "width: 18rem;")
        .attr("id", "card-clicker")
        .attr("database-id", `${postData[i].id}`)
        .attr("database-title", `${postData[i].title}`)
        .attr("database-body", `${postData[i].body}`)
        .append($cardBody)
      const $column = $("<div>")
        .addClass("col-12 col-md-4 mb-2 mt-2 d-flex flex-row")
        .append($card);
      $("#note-list").append($column);
    }
  })
});

$("#saveBtn").on("click", function (event) {
  event.preventDefault();

  const postObj = {
    title: $("#titleInput").val().trim(),
    body: $("#mainInput").val().trim()
  }

  // get access token
  const token = localStorage.getItem("accessToken");

  $.ajax({
      url: "/api/post",
      method: "POST",
      data: postObj,
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(function (bookData) {
      console.log(bookData)
      location.reload()
    })
    .catch(function (err) {
      console.log(err);
    });
})

$(document).on("click", "#deleteBtn", function (event) {
  event.preventDefault()

  const deleteID = $(this).attr("database-id")
  // get access token
  const token = localStorage.getItem("accessToken");

  $.ajax({
      url: `/api/post/delete/${deleteID}`,
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(function (postData) {
      console.log(postData)
      location.reload()
    })
    .catch(function (err) {
      console.log(err);
    });
})

$(document).on("click", "#card-clicker", function (event) {
  event.preventDefault();

  const dbID = $(this).attr("database-id");
  const dbTitle = $(this).attr("database-title");
  const dbBody = $(this).attr("database-body")

  $("#idInput").text(dbID);
  $("#titleInput").text(dbTitle);
  $("#mainInput").text(dbBody);

  console.log(dbID, dbTitle, dbBody)
})

$("#updateBtn").on("click", function (event) {
  event.preventDefault();

  // get access token
  const token = localStorage.getItem("accessToken");
  const updateObj = {
    title: $("#titleInput").val().trim(),
    body: $("#mainInput").val().trim()
  }
  var postID = $("#idInput").val().trim();

  $.ajax({
    url: `/api/post/update/${postID}`,
    method: "PUT",
    data: updateObj,
    headers: {
      authorization: `Bearer ${token}`
    }
  }).then(function (postData) {
    console.log(postData);
    location.reload();
  })
  .catch(function (err) {
    console.log(err);
  });
});