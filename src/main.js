import { getMovies } from '../apiFetch/apiFetch'
import './style.scss'



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

const anchorElement = document.querySelector("#app")

const maindiv = document.createElement("div")
maindiv.classList.add("maindiv")

const siteTitle = document.createElement("h1")
siteTitle.classList.add("sitetitle")
siteTitle.textContent = "LISTADO DE PELÍCULAS"

const findFilmsBtn = document.createElement("button")
findFilmsBtn.classList.add("findbtn")
findFilmsBtn.textContent = "Buscar películas"

maindiv.appendChild(siteTitle)
maindiv.appendChild(findFilmsBtn)

anchorElement.appendChild(maindiv)

findFilmsBtn.addEventListener("click",(e) =>{
e.defaultPrevented();

getMovies();
})
