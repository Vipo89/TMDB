

export function createBtn (name,text,parent,methodToCall,methodparameter){
const btnCreated = document.createElement("button")
btnCreated.classList.add(name)
btnCreated.textContent = text;

parent.appendChild(btnCreated)

btnCreated.addEventListener("click", (e) => {
  methodToCall(methodparameter);
});
return btnCreated;
}