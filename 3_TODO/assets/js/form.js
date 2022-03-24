// console.log(myLanguages);

const formLanguageElement = document.querySelector("#language-form");

formLanguageElement.addEventListener("submit", (event) => {
  // event.preventDefault();
  const { language, complete, start } = event.target;

  // console.log(event.target.language, event.target.complete, event.target.start);

  // console.log('antes del push', myLanguages)

  myLanguages.push({
    name: language.value,
    complete: complete.checked,
    start: start.checked,
  });

  // console.log('despues del push', myLanguages)

  localStorage.setItem("@myLanguages", JSON.stringify(myLanguages));
});

// console.log('cargando por primera vez', myLanguages)

// console.log('form.js')

// const desdeForm = 1
