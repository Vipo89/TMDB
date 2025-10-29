import { createCard, detailsCard } from "../components/createCard";

export function showMovies(movies, container) {
  if (!movies || movies.length === 0) {
    container.textContent = "No se han recibido películas.";
    return;
  } 

  if (Array.isArray(movies)) {
    container.innerHTML = "";
    movies.forEach((movie) => {
      const movieCard = createCard(movie);
      container.appendChild(movieCard);
    });
  } else {
    const oneMovieCard = detailsCard(movies);
    container.appendChild(oneMovieCard);
  }
}