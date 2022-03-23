// console.log(myLanguages);

const formLanguageElement = document.querySelector("#language-form");

formLanguageElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const { language, complete, start } = event.target;

  // console.log(event.target.language, event.target.complete, event.target.start);
  
  myLanguages.push({
    name: language.value,
    complete: complete.checked,
    start: start.checked,
  })
});

console.log('Primera carga de la aplicación', myLanguages);