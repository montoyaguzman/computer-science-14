/**
 * 1. Verificamos si la variable @myLanguages existe, sino creamos una key con un array vacio
 */
if (!localStorage.getItem("@myLanguages")) {
  localStorage.setItem("@myLanguages", JSON.stringify([]));
}
/**
 * 2. Leemos los valores almacenados en la key @myLanguages
 */
const myLanguages = JSON.parse(localStorage.getItem("@myLanguages"));
/**
 * 3. Seleccionamos los elemento principales de nuestra aplicación para utilizarlos en la renderización de elementos y visualización de datos
 * 
 * QUERYSELECTOR: 
 * https://developer.mozilla.org/es/docs/Web/API/Document/querySelector
 * https://www.w3schools.com/jsref/met_document_queryselector.asp
 * 
 * QUERYSELECTORALL: 
 * https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
 * https://www.w3schools.com/jsref/met_document_queryselectorall.asp
 */
const listLanguagesElement = document.querySelector("#list-languages");
const languagePendingElement = document.querySelector("#language-pending");
const languageCompleteElement = document.querySelector("#language-complete");
const languageAllElement = document.querySelector("#language-all");
/**
 * 4. Creamos una función que renderiza todos los elementos LI para representar los lenguajes de programación, asignando clases y atributos
 * CLASES:
 * https://developer.mozilla.org/es/docs/Web/API/Element/classList
 * https://www.w3schools.com/jsref/prop_element_classlist.asp
 *
 * CREATEELEMENT:
 * https://developer.mozilla.org/es/docs/Web/API/Document/createElement
 * https://www.w3schools.com/jsref/met_document_createelement.asp
 *
 * SETATTRIBUTE:
 * https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute
 * https://www.w3schools.com/jsref/met_element_setattribute.asp
 *
 * INNERTEXT:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
 * https://www.w3schools.com/jsref/prop_node_innertext.asp
 *
 * APPENDCHILD:
 * https://developer.mozilla.org/es/docs/Web/API/Node/appendChild
 * https://www.w3schools.com/jsref/met_node_appendchild.asp
 *
 */
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
/**
 * 5. Comprobar si la key @myLanguages tiene datos o está vacio, si está vacio mostrar el mensaje "Languages not found"
 *
 * FOREACH:
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * https://www.w3schools.com/jsref/jsref_foreach.asp
 *
 * INSERTADJACENTHTML:
 * https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentHTML
 * https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp
 *
 */
if (myLanguages.length > 0) {
  myLanguages.forEach(renderElementList);
} else {
  listLanguagesElement.insertAdjacentHTML(
    "afterbegin",
    "<h3 class='text-center p-3'>Languages not found</h3>"
  );
}
/**
 * 6. Comprobar la cantidad de lenguajes completados o iniciados y los lenguajes iniciados y completado
 */
const languageComplete = myLanguages.filter(
  ({ complete }) => complete === true
);
const languagePending = myLanguages.length - languageComplete.length;
/**
 * 7. Realizar el calculo de "All languages", "Languages complete" y "Languages pending"
 */
languagePendingElement.innerText = languagePending;
languageCompleteElement.innerText = languageComplete.length;
languageAllElement.innerText = myLanguages.length;
/**
 * 8. Detectar el evento click sobre el elemento UL, para heredar este evento (CLICK) a todos sus hijos (LI, DIV, I, BUTTON)
 * 
 * EVENT.TARGET:
 * https://developer.mozilla.org/es/docs/Web/API/Event/target
 * https://www.w3schools.com/jsref/event_target.asp
 */
listLanguagesElement.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // Si el elemento al que se da click es de tipo BUTTON, se le activará el click ejeuctando las siguientes acciones
    let position = event.target.getAttribute("index");
    // Leer el atributo index (index="0") para capturar la posición en el array almacenados en el locaStorage 
    myLanguages.splice(parseInt(position), 1);
    // Parseamos el dato recolectado del atributo index y lo convetimos en un string, sobre el array de myLanguages (variable) aplicacion el método splice con la posición del index y definiendo la eliminación de un sólo elemento (1)
    localStorage.setItem("@myLanguages", JSON.stringify(myLanguages));
    // Después de modifícar la variable myLanguages, sobreescribimos la key @myLanguages del localStorage con el nuevo array almacenado en la variable myLanguages
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

// !localStorage.getItem("@myLanguages") &&
//   localStorage.setItem("@myLanguages", JSON.stringify([]));

// Asignando eventos
// const deleteLanguage = (button, index) => {
//   button.addEventListener("click", () => {
//     console.log(myLanguages.indexOf(myLanguages[index]));
//   });
// };
// const deleteButtonsElements = Array.from(
//   document.querySelectorAll("button.bi-trash3-fill")
// );
// deleteButtonsElements.forEach(deleteLanguage);
