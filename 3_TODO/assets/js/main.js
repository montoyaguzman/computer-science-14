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

const renderElementList = ({ name }) => {
  let language = document.createElement("li");
  language.innerText = name;
  language.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between"
  );
  listLanguagesElement.appendChild(language);
};

myLanguages.forEach(renderElementList);
languagePendingElement.innerText = languagePending;
languageCompleteElement.innerText = languageComplete.length;
languageAllElement.innerText = myLanguages.length;

// `<li class="list-group-item d-flex justify-content-between">
//   HTML
//   <div>
//     <i class="bi bi-trash-fill text-danger"></i>
//     <i class="bi bi-check-circle-fill text-success"></i>
//   </div>
// </li>`

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
