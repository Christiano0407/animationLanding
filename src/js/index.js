console.group("Animation Landing Page");
// DOM Animation ===>
const btnModal = document.getElementById("btn");
console.log(btnModal);
const modal = document.querySelector(".modal");
console.log(modal);
const close = document.querySelector(".modal__container--close");
/* console.log(close); */
// Events ==>
btnModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
console.groupEnd();
