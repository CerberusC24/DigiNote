  
  
  $(document).ready(() => {

    $("#movie-title-btn").on("click", function(event) {
      event.preventDefault()
      const title = $("#movie-title").val().trim()

      $.ajax({
          url: '/api/search/movie?title=' + title,
          method: 'get'
        })
        .then((response) => {
          $("#movie-card").append(
          `Poster: ${response.Poster}<br>
          Movie Title: ${response.Title}<br>
          Rated: ${response.Rated}<br>
          Release Date: ${moment(response.Released, 'DD MMM YYYY').format('MM-DD-YYYY')}<br>
          IMDB Rating: ${response.Ratings[0].Value}<br>
          Rotten Tomatoes Rating: ${response.Ratings[1].Value}<br>
          Plot Summary: ${response.Plot}<br>
          Actors: ${response.Actors}`)
        })
        .catch((err) => {
          console.log(err);
        });

    })

  })