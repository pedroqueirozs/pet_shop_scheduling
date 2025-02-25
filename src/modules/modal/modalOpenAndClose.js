const btnCloseModal = document.querySelector(".btn-close-modal");
const btnOpenModal = document.querySelector(".new-schedule");
const modal = document.querySelector(".modal");

btnOpenModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
btnCloseModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
