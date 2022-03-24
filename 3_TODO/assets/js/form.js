/**
 * 9. Seleccionamos el elemento con el id "#language-form" el cual es el formulario para el ingreso de nuevos lenguajes 
 */
const formLanguageElement = document.querySelector("#language-form");
/**
 * 10. Seleccionamos el elemento con el id "#language-form" el cual es el formulario para el ingreso de nuevos lenguajes 
 * SUBMIT: 
 * https://www.w3schools.com/jsref/met_document_queryselectorall.asp
 * https://www.w3schools.com/jsref/event_onsubmit.asp
 * 
 * PREVENTDEFAULT: 
 * https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault
 * https://www.w3schools.com/jsref/event_preventdefault.asp
 * 
 * PUSH: 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 * https://www.w3schools.com/jsref/jsref_push.asp
 */
formLanguageElement.addEventListener("submit", (event) => {
  // event.preventDefault();
  const { language, complete, start } = event.target;
  // Destructuramos la variable "event.target" en cada uno de los atributos "name" conocidos en el formulario
  // console.log(event.target.language, event.target.complete, event.target.start);
  // console.log('antes del push', myLanguages)
  myLanguages.push({
    name: language.value,
    complete: complete.checked,
    start: start.checked,
  });
  // Modificamos la variable myLanguages agregando los datos recolectado en el formulario en formato de Object
  localStorage.setItem("@myLanguages", JSON.stringify(myLanguages));
  // Después de agregar el nuevo lenguaje sobreescribimos la key @myLanguages con el nuevo array y el método stringify de JSON
});
