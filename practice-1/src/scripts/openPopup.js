const btn = document.querySelector(".card__button");
const popup = document.querySelector(".popup");

btn.addEventListener("click", () => {
  withinBoundaries = true;
  popup.classList.add("opened");
});
