const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-container");

function openAndCloseModal() {
  openBtn.addEventListener("click", function (e) {
    modal.classList.add("show");
  });
  closeBtn.addEventListener("click", function (e) {
    modal.classList.remove("show");
  });
}

openAndCloseModal();
