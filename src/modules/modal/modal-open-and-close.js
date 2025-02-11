const btnClose = document.querySelector(".btn-close");
const modal = document.querySelector(".modal");

btnClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});
