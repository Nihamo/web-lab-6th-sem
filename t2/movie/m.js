//this the object
const favoriteMovie = {
    title: "Puff the Magic Dragon",
    duration: 30, // in minutes
    stars: ["Puff", "Jackie", "Living Sneezes"]
  };
  
  function printMovieInfo() {
    const info = `${favoriteMovie.title} lasts for ${favoriteMovie.duration} minutes. Stars: ${favoriteMovie.stars.join(", ")}.`;
    document.getElementById("movieOutput").textContent = info;
  }
  