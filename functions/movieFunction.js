import { createCard } from "../components/createCard";

export function showMovies(movies, container) {
  if (!movies || movies.length === 0) {
    container.textContent = "No se han recibido películas.";
    return;
  } else {
    container.innerHTML = "";
  }
  if (movies.length > 1) {
    movies.forEach((movie) => {
      const movieCard = createCard(movie);
      container.appendChild(movieCard);
    });
  } else {
    const oneMoviecard = createCard(movies);
    container.appendChild(oneMoviecard);
  }
}
