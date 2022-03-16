const listLanguages = document.querySelector("#list-languages");

for (var i = 0; i < 10; i++) {
  let language = document.createElement("li");
  language.innerText = i + 1;
  if (i % 2) {
    language.classList.add("fs-1");
    listLanguages.appendChild(language);
  } else {
    language.classList.add("fs-2");
    listLanguages.appendChild(language);
  }
}

// `<li class="list-group-item d-flex justify-content-between">
//   HTML
//   <div>
//     <i class="bi bi-trash-fill text-danger"></i>
//     <i class="bi bi-check-circle-fill text-success"></i>
//   </div>
// </li>`
