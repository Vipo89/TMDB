export function createCard(movie){

    console.log(movie);
    
const movieCard = document.createElement("div")
movieCard.classList.add("movie-card")

const movieImg = document.createElement("img")
movieImg.classList.add("movie-img")
movieImg.setAttribute("src",`https://image.tmdb.org/t/p/w300${movie.poster_path}`)

const movieTitle = document.createElement("h2")
movieTitle.classList.add("movie-title")
movieTitle.textContent = movie.original_title

const movieInfo = document.createElement("p")
movieInfo.classList.add("movie-info")
movieInfo.textContent = `Rating: ${movie.vote_average} Date: ${movie.release_date}`

movieCard.appendChild(movieImg)
movieCard.appendChild(movieTitle)
movieCard.appendChild(movieInfo)

return movieCard
}