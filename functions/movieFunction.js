import { createCard } from "../components/createCard";

export function showMovies(movies, container) {
  if (!movies || movies.length === 0) {
    container.textContent = "No se han recibido películas.";
    return;
  } else {
    container.innerHTML = "";
  }

  movies.forEach((movie) => {
      console.log(movie);
    const movieCard = createCard(movie);
    container.appendChild(movieCard);
  });
}
