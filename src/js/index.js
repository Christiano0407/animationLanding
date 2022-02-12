console.group("Animation Landing Page");
// DOM Animation ===>
const modal = document.querySelector(".modal");
console.log(modal);
const btnModal = document.querySelector("#btn");
console.log(btnModal);
const closeBtn = document.querySelector(".modal__container--close");
console.log(closeBtn);
/* console.log(close); */
// Events ==>
btnModal.addEventListener(`click`, () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});

closeBtn.addEventListener(`click`, () => {
  console.log("here!");
  modal.classList.add("hidden");
  modal.classList.remove("visible");
});
console.groupEnd();
