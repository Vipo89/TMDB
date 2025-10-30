import { getMovies } from "../api/apiFetch";
import { createBtn } from "../components/createBtn";
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

const findFilmsBtn = document.createElement("button");
findFilmsBtn.classList.add("findbtn");
findFilmsBtn.textContent = "Buscar películas";

const mainGrid = document.createElement("div");
mainGrid.classList.add("moviegrid");

maindiv.appendChild(siteTitle);

const findFilmsBtn1 = createBtn("findbtn1","Buscar películas",maindiv,getMovies,mainGrid)
maindiv.appendChild(findFilmsBtn1)
maindiv.appendChild(findFilmsBtn);

const detailsDiv = document.createElement("div");
detailsDiv.classList.add("detaildiv");

const selectCategories = createSelect();

maindiv.appendChild(selectCategories)

anchorElement.appendChild(maindiv);
anchorElement.appendChild(mainGrid);
anchorElement.appendChild(detailsDiv);


findFilmsBtn.addEventListener("click", (e) => {
  getMovies(mainGrid);
});
