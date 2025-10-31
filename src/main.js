import { getMovies } from "../api/apiFetch";
import { createBtn } from "../components/createBtn";
import { createInput } from "../components/createInput";
import { createSelect } from "../components/createSelect";
import "./style.scss";

// const sideselect = document.createElement("select")
// sideselect.classList.add("select-option")

// const popularOption = document.createElement("select")
// popularOption.value = "Populares"
// popularOption.textContent = "Populares"

// const popularOption = document.createElement("select")
// popularOption.value = "Detalles"
// popularOption.textContent = "Populares"

// const popularOption = document.createElement("select")
// popularOption.value = "Populares"
// popularOption.textContent = "Populares"

const anchorElement = document.querySelector("#app");

const maindiv = document.createElement("div");
maindiv.classList.add("maindiv");

const siteTitle = document.createElement("h1");
siteTitle.classList.add("sitetitle");
siteTitle.textContent = "LISTADO DE PELÍCULAS";



const mainGrid = document.createElement("div");
mainGrid.id = "movie-grid"
mainGrid.classList.add("moviegrid");

maindiv.appendChild(siteTitle);

const findFilmsBtn1 = createBtn(
  "findbtn",
  "Buscar películas",
  maindiv,
  getMovies,
  mainGrid
);
maindiv.appendChild(findFilmsBtn1);


const detailsDiv = document.createElement("div");
detailsDiv.classList.add("detaildiv");

const selectCategories = createSelect();

const inputFindFilm = createInput();

const findDiv = document.createElement("div")
findDiv.classList.add("find-div")

const gridFormBtn = document.createElement("button")
gridFormBtn.classList.add("findbtn")
gridFormBtn.textContent = "¡Cambia el grid de 4x a 2x!"

findDiv.appendChild(selectCategories)
findDiv.appendChild(inputFindFilm)
findDiv.appendChild(findFilmsBtn1)
findDiv.appendChild(gridFormBtn)

gridFormBtn.addEventListener("click",(e)=>{
const currentClass = document.querySelector("#movie-grid").getAttribute("class")
const movieGrid = document.querySelector("#movie-grid")
  if (currentClass === "moviegrid") {
    movieGrid.classList.remove("moviegrid");
    movieGrid.classList.add("moviegrid2");
  } else {
    movieGrid.classList.remove("moviegrid2");
    movieGrid.classList.add("moviegrid");
  }
})

maindiv.appendChild(findDiv);

anchorElement.appendChild(maindiv);
anchorElement.appendChild(mainGrid);
anchorElement.appendChild(detailsDiv);
