import { searchMovies } from "../api/apiFetch"

export function createInput(){

    const findFilm = document.createElement("input")
findFilm.setAttribute("type","text")
findFilm.classList.add("find-input")
findFilm.placeholder = "Nombre de la película"
createInputEventListener(findFilm)
return findFilm;
}

function createInputEventListener(input){
    input.addEventListener("input", async (e) =>{
        const query = e.target.value.trim();
        if (query.length >= 3) {
            const mainGrid = document.querySelector(".moviegrid");
        searchMovies(mainGrid, query);
        }
    })
}