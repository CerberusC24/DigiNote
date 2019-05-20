$(document).ready(() => {

  $("#song-search-btn").on("click", function(event) {
    event.preventDefault();

    const title = $("#song-title").val().trim();
    const artist = $("#song-artist").val().trim();

    $.ajax({
      url: `/api/search/song?title=${title}&artist=${artist}`,
      method: 'get'
    })
    .then(function (response) {
      console.log(response)
      var artist = response.tracks.items[0].artists[0].name
      var title = response.tracks.items[0].name;
      var releaseDate = response.tracks.items[0].album.release_date

      console.log(`
      Artist: ${artist}
      Song Title: ${title}
      Release Date: ${releaseDate}`
      )
    })
  })
  
})