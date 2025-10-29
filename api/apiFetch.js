import { showMovies } from "../functions/movieFunction";
import { apiConfig } from "./apiConfig";

export async function getMovies(container) {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}popular?api_key=${apiConfig.apiKey}`
    );
    if (!response.ok) {
      throw new Error("Error obteniendo el listado");
    }
    const data = await response.json();
    console.log(data.results);
    

    // if (typeof localStorage !== undefined) {
    //   localStorage.setItem("dataMovies", JSON.stringify(data.results));
    // }
    showMovies(data.results,container);
  } catch (error) {
    console.log("Se ha producido un error: ", error);
  }
}


export async function getMovie(container,id) {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}${id}?api_key=${apiConfig.apiKey}`
      //https://api.themoviedb.org/3/movie/",
    );
    if (!response.ok) {
      throw new Error("Error obteniendo el listado");
    }
    const data = await response.json();

    // if (typeof localStorage !== undefined) {
    //   localStorage.setItem("dataMovies", JSON.stringify(data.results));
    // }
console.log(data);

    showMovies(data,container);
  } catch (error) {
    console.log("Se ha producido un error: ", error);
  }
}