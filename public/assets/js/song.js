$(document).ready(() => {
  const songObj = {
    title: `I'm Yours`,
    artist: 'Jason Mraz'
  }
  $.ajax({
    url: `/api/search/song?title=${songObj.title}&artist=${songObj.artist}`,
    method: 'get',
  })
    .then(function (response) {
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