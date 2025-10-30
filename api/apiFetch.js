import { detailsCard } from "../components/createCard";
import { showMovies } from "../functions/movieFunction";
import { apiConfig } from "./apiConfig";

export async function getMovies(container, datalist = "upcoming") {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}${datalist}?api_key=${apiConfig.apiKey}`
    );
    if (!response.ok) {
      throw new Error("Error obteniendo el listado");
    }
    const data = await response.json();

    // if (typeof localStorage !== undefined) {
    //   localStorage.setItem("dataMovies", JSON.stringify(data.results));
    // }
    showMovies(data.results, container);
  } catch (error) {
    console.log("Se ha producido un error: ", error);
  }
}

export async function getMovie(container, id) {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}${id}?api_key=${apiConfig.apiKey}`
    );
    if (!response.ok) throw new Error("Error obteniendo la película");
    const movieData = await response.json();

    const cast = await getCredits(id);

    const card = detailsCard(movieData, cast);
    container.appendChild(card);
  } catch (error) {
    console.log("Se ha producido un error:", error);
  }
}

export async function getCredits(movieId) {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}${movieId}/credits?api_key=${apiConfig.apiKey}`
    );
    if (!response.ok) throw new Error("Error obteniendo el reparto");

    const data = await response.json();

    return data.cast;
  } catch (error) {
    console.error("Error en getCredits:", error);
    return [];
  }
}
