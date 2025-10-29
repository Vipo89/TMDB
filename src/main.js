import { getMovies } from "../api/apiFetch";
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

const findFilmsBtn = document.createElement("button");
findFilmsBtn.classList.add("findbtn");
findFilmsBtn.textContent = "Buscar películas";

const mainGrid = document.createElement("div")
mainGrid.classList.add("moviegrid")


maindiv.appendChild(siteTitle);
maindiv.appendChild(findFilmsBtn);


anchorElement.appendChild(maindiv);
anchorElement.appendChild(mainGrid);

findFilmsBtn.addEventListener("click", (e) => {

  getMovies(mainGrid);
  console.log("Hola");
});
