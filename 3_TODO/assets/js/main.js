const myLanguages = [
  { name: "Javascript", complete: false, start: true },
  { name: "Python", complete: false, start: false },
  { name: "PHP", complete: false, start: false },
  { name: "Java", complete: false, start: false },
  { name: "Swift", complete: false, start: false },
  { name: "Ruby", complete: true, start: false },
  { name: "C#", complete: false, start: false },
  { name: "C++", complete: false, start: false },
  { name: "Go", complete: false, start: false },
  { name: "Dart", complete: true, start: false },
  { name: "Cobol", complete: false, start: false },
];

const listLanguagesElement = document.querySelector("#list-languages");
const languagePendingElement = document.querySelector("#language-pending");
const languageCompleteElement = document.querySelector("#language-complete");
const languageAllElement = document.querySelector("#language-all");

const languageComplete = myLanguages.filter(
  ({ complete }) => complete === true
);
const languagePending = myLanguages.length - languageComplete.length;

function getButtons() {
  console.log("todos los botones");
}

const renderElementList = ({ name, complete, start }) => {
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

const deleteLanguage = (button, index) => {
  button.addEventListener("click", () => {
    console.log(myLanguages[index]);
  });
};

myLanguages.forEach(renderElementList);
languagePendingElement.innerText = languagePending;
languageCompleteElement.innerText = languageComplete.length;
languageAllElement.innerText = myLanguages.length;

// Eventos

const deleteButtonsElements = Array.from(
  document.querySelectorAll("button.bi-trash3-fill")
);

deleteButtonsElements.forEach(deleteLanguage);

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

const saveButtonElement = document.querySelector("#save");
saveButtonElement.addEventListener("click", () => {
  console.log("GUARDAR 🤢");
});
