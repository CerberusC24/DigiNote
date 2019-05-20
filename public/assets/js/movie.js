  $(document).ready(() => {

    $("#movie-title-btn").on("click", function (event) {
      event.preventDefault()

      const title = $("#movie-title").val().trim()

      $.ajax({
          url: '/api/search/movie?title=' + title,
          method: 'get'
        })
        .then((response) => {
          console.log(response.Poster)

          const moviePoster = $("<img>")
          .attr("src", response.Poster)
          .addClass("card-img-top");
          const movieBody = $("<div>")
          .addClass("card-body")
          const moviePtag = $("<p>")
          .addClass("card-text")
          .html(`${response.Title} - ${response.Released}<br>Rated: ${response.Rated}<hr>Plot Summary: ${response.Plot}<br>Cast: ${response.Actors}<hr>RT Score: ${response.Ratings[1].Value}`);

          const movieContent = $("<div>")
            .addClass("card")
            .attr("movie-title", response.Title)
            .attr("release-year", moment(response.Released, 'DD MMM YYYY').format('MM-DD-YYYY'))
            .append(moviePoster, movieBody, moviePtag);
          $("#movie-card").append(movieContent);

          // get access token
          const token = localStorage.getItem("accessToken");

          var movieData = {
            poster: response.Poster,
            title: response.Title,
            year: response.Year,
            plot: response.Plot,
            cast: response.Actors,
            rated: response.Rated,
            rating: response.Ratings[1].Value
          }
          console.log(movieData);
        

          $.ajax({
            url: "/api/movie",
            method: "POST",
            data: movieData,
            headers: {
              authorization: `Bearer ${token}`
            }
          }).then(function (movieData) {
            console.log(movieData)
          });
        })
        .catch((err) => {
          console.log(err);
        });

    })

  })