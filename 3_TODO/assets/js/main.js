const myLanguages = [
  "Javascript",
  "Python",
  "PHP",
  "Java",
  "Swift",
  "Ruby",
  "C#",
  "C++",
  "Go",
  "Dart",
  "Cobol",
];

const listLanguagesElement = document.querySelector("#list-languages");
const languagePendingElement = document.querySelector("#language-pending");

const languageComplete = 0 
const languagePending = myLanguages.length - languageComplete

const renderElementList = (name) => {
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
languagePendingElement.innerText = languagePending


// `<li class="list-group-item d-flex justify-content-between">
//   HTML
//   <div>
//     <i class="bi bi-trash-fill text-danger"></i>
//     <i class="bi bi-check-circle-fill text-success"></i>
//   </div>
// </li>`
