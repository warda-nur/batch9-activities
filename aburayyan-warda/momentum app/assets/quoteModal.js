const openModalButtons1 = document.querySelectorAll("[data-modal-target1]");
const closeModalButtons1 = document.querySelectorAll("[data-close-button1]");
const overlay1 = document.getElementById("overlay1");

openModalButtons1.forEach((button) => {
  console.log(button);

  button.addEventListener("click", function () {
    const modal = document.querySelector(button.dataset.modalTarget1);

    openModal1(modal);
  });
});

overlay1.addEventListener("click", () => {
  const modals1 = document.querySelectorAll(".modal.active");
  modals1.forEach((modal) => {
    closeModal1(modal);
  });
});

closeModalButtons1.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal1(modal);
  });
});

function openModal1(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal1(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay1.classList.remove("active");
}
