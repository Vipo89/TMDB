import { showMovies } from "../functions/movieFunction";
import { apiConfig } from "./apiConfig";

export async function getMovies(container) {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}upcoming?api_key=${apiConfig.apiKey}&language=es-ES&page=1`
    );
    if (!response.ok) {
      throw new Error("Error obteniendo el listado");
    }
    const data = await response.json();

    // if (typeof localStorage !== undefined) {
    //   localStorage.setItem("dataMovies", JSON.stringify(data.results));
    // }

    console.log("Datos enviados");
    showMovies(data.results,container);
  } catch (error) {
    console.log("Se ha producido un error: ", error);
  }
}
