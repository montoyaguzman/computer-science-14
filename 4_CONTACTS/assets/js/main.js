let users = [];

let list = document.querySelector("#list");
let search = document.querySelector("#search");

search.addEventListener("keypress", (event) => {
  list.innerHTML = "";

  /**
   * EVENT
   */
  // console.log('event', event);
  // console.log('event.target', event.target);
  // console.log('event.target.value', event.target.value);

  // if (event.target.value === "") {
  //   printUsers(users);
  // } else {
  let searching = users.filter(({ name }) =>
    name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
  );
  printUsers(searching);
  // }
});

let printUsers = (users) => {
  users.forEach((element) => {
    let contact = document.createElement("li");
    let colLeft = document.createElement("div");
    let colRigth = document.createElement("div");
    let rowTop = document.createElement("div");
    let rowBottom = document.createElement("div");

    contact.classList.add("contact", "mb-2");
    colLeft.classList.add("contact-image");
    colRigth.classList.add("p-3");
    rowTop.classList.add("fw-bold");
    rowBottom.classList.add("fw-light");
    colLeft.innerText = element.name[0];
    rowTop.innerText = element.name;
    rowBottom.innerText = element.address.city;

    list.appendChild(contact);
    contact.appendChild(colLeft);
    contact.appendChild(colRigth);
    colRigth.appendChild(rowTop);
    colRigth.appendChild(rowBottom);
  });
};

// fetch("../assets/data/users.json")
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => (users = data))
  .then(() => printUsers(users));
