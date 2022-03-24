const myLanguages = JSON.parse(localStorage.getItem("@myLanguages"));

const listLanguagesElement = document.querySelector("#list-languages");
const languagePendingElement = document.querySelector("#language-pending");
const languageCompleteElement = document.querySelector("#language-complete");
const languageAllElement = document.querySelector("#language-all");

const languageComplete = myLanguages.filter(
  ({ complete }) => complete === true
);
const languagePending = myLanguages.length - languageComplete.length;

const renderElementList = ({ name, complete, start }, index) => {
  // Crear elementos necesario
  let listElement = document.createElement("li");
  let iconBox = document.createElement("div");
  let iconPlay = document.createElement("i");
  let iconPause = document.createElement("i");
  let iconCheck = document.createElement("i");
  let deleteButton = document.createElement("button");
  // Asignamos las clases correspondientes a los iconos
  iconPlay.classList.add("bi", "bi-play-circle-fill", "text-primary");
  iconCheck.classList.add("bi", "bi-check-circle-fill", "text-success");
  iconPause.classList.add("bi", "bi-pause-circle-fill", "text-warning");
  deleteButton.classList.add("bi", "bi-trash3-fill", "text-danger");
  deleteButton.setAttribute("type", "submit");
  deleteButton.setAttribute("index", index);

  listElement.innerText = name;
  listElement.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between"
  );
  // Insertar li en ul
  listLanguagesElement.appendChild(listElement);
  // Insertar div en li
  listElement.appendChild(iconBox);
  // Insertar i en div
  if (complete) {
    iconBox.appendChild(iconCheck);
  } else if (start && !complete) {
    // start && complete === false
    iconBox.appendChild(iconPlay);
  } else {
    iconBox.appendChild(iconPause);
  }
  iconBox.appendChild(deleteButton);
};

// Elminando lenguajes de la lista

// Asignando eventos
listLanguagesElement.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    let position = event.target.getAttribute("index");
    myLanguages.splice(parseInt(position), 1);
    localStorage.setItem("@myLanguages", JSON.stringify(myLanguages));
  }
});

// Diferentes manera de escribir condicionales
// const aprendido = false
// aprendido && console.log(aprendido)
// aprendido ? console.log(aprendido) : console.log('no aprendido')
// if (aprendido === true ){
//   console.log(aprendido)
// } else {
//   console.log('no aprendido')
// }

// Ejemplo de destructuración
// const {name, complete} = myLanguages[4]
// console.log(myLanguages[4].name, myLanguages[4].complete)
// console.log(name, complete)
// console.table(myLanguages)

// console.log('list.js')

// const desdeList = 1
