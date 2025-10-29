import { getMovie } from "../api/apiFetch";

export function createCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  const movieImg = document.createElement("img");
  movieImg.classList.add("movie-img");
  movieImg.setAttribute("id-movie", movie.id);
  movieImg.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  );

  movieImg.addEventListener("click", (e) => {
    console.log(e.target.getAttribute("id-movie"));
    const detailsCardDiv = document.querySelector(".detaildiv");
    getMovie(detailsCardDiv, movie.id);
  });

  const movieTitle = document.createElement("h2");
  movieTitle.classList.add("movie-title");
  movieTitle.textContent = movie.original_title;

  const movieInfo = document.createElement("p");
  movieInfo.classList.add("movie-info");
  movieInfo.textContent = `Rating: ${movie.vote_average} Date: ${movie.release_date}`;

  movieCard.appendChild(movieImg);
  movieCard.appendChild(movieTitle);
  movieCard.appendChild(movieInfo);

  return movieCard;
}
/////////////////////

let moviecounter = 0;

export function detailsCard(movie, castArray = []) {
  const detailsCard = document.createElement("div");
  detailsCard.classList.add("detail-card");
  detailsCard.classList.add(`card${++moviecounter}`);


  const movieImg = document.createElement("img");
  movieImg.classList.add("movie-img");
  movieImg.setAttribute("id-movie", movie.id);
  movieImg.setAttribute("src", `https://image.tmdb.org/t/p/w300${movie.poster_path}`);


  const movieTitle = document.createElement("h2");
  movieTitle.classList.add("movie-title");
  movieTitle.textContent = movie.original_title;


  const movieDescription = document.createElement("p");
  movieDescription.classList.add("detail-description");
  movieDescription.textContent = movie.overview;


  const castContainer = document.createElement("div");
  castContainer.classList.add("cast-container");

  castArray.forEach(actor => {
    const castDiv = document.createElement("div");
    castDiv.classList.add("cast-div");

    const castName = document.createElement("p");
    castName.classList.add("cast-name");
    castName.textContent = actor.name;

    const castImg = document.createElement("img");
    castImg.classList.add("cast-img");
    castImg.src = `https://image.tmdb.org/t/p/w200${actor.profile_path}`; 

    castDiv.append(castImg, castName);
    castContainer.appendChild(castDiv);
  });

  detailsCard.appendChild(movieImg);
  detailsCard.appendChild(movieTitle);
  detailsCard.appendChild(movieDescription);
  detailsCard.appendChild(castContainer);

  return detailsCard;
}

//This function works but independently of the others one

// export function credits(castArray) {
//   const castContainer = document.createElement("div");
//   castContainer.classList.add("cast-container");

//   castArray.forEach((actor) => {
//     const castDiv = document.createElement("div");
//     castDiv.classList.add("cast-div");

//     const castName = document.createElement("p");
//     castName.classList.add("cast-name");
//     castName.textContent = actor.name;

//     const castImg = document.createElement("img");
//     castImg.classList.add("cast-img");
//     castImg.src = `https://image.tmdb.org/t/p/w200${actor.profile_path}`;

//     castDiv.append(castImg, castName);
//     castContainer.appendChild(castDiv);
//   });

//   return castContainer;
// }
