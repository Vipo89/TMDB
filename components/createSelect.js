import { moviesList } from "../api/apiConfig";
import { getMovies } from "../api/apiFetch";

export function createSelect() {

  const selectCategories = document.createElement("select");
  selectCategories.classList.add("select-list");

  const arrayData = Object.entries(moviesList);

  arrayData.forEach((e) => {
    const selectOption = document.createElement("option");
    selectOption.setAttribute("value", e[1]);
    selectOption.textContent = e[0];
    selectCategories.appendChild(selectOption);
  });
  createSelectEventListener(selectCategories);
  return selectCategories;
}

function createSelectEventListener(select) {
  select.addEventListener("change", (e) => {
    const selectedList = e.target.value;
    const maingrid = document.querySelector(".moviegrid");
    getMovies(maingrid, selectedList);
  });
}
