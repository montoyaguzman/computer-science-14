// console.log(myLanguages);

const saveButtonElement = document.querySelector("#save");

saveButtonElement.addEventListener("click", (event) => {
  let inputValue = document.querySelector("input");
  event.preventDefault();
  myLanguages.push({ name: inputValue.value, complete: false, start: true });
});
