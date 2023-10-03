const closeBtn = document.querySelector(".popup__close-btn");

closeBtn.addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("opened");
});