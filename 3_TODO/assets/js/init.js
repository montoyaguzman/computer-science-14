// const sumaDeListyForm = () => desdeList + desdeForm;

// console.log("init.js");
// console.log(sumaDeListyForm());

// !localStorage.getItem("@myLanguages") &&
//   localStorage.setItem("@myLanguages", JSON.stringify([]));

if (!localStorage.getItem("@myLanguages")) {
  // Leemos la key @myLanguages, sino existe la respuesta es NULL
  // localStorage.getItem('@myLanguages') === null
  localStorage.setItem("@myLanguages", JSON.stringify([])); // Creamos la key @myLanguages con un Array vacio
}

if (myLanguages.length > 0) {
  myLanguages.forEach(renderElementList);
} else {
  listLanguagesElement.insertAdjacentHTML(
    "afterbegin",
    "<h3 class='text-center p-3'>Languages not found</h3>"
  );
}
languagePendingElement.innerText = languagePending;
languageCompleteElement.innerText = languageComplete.length;
languageAllElement.innerText = myLanguages.length;


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
