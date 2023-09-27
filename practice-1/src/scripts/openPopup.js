const btn = document.querySelector(".card__button");
const popup = document.querySelector(".popup");

btn.addEventListener("click", () => {
  withinBoundaries = true;
  popup.classList.add("opened");
});

// console.log(popup.classList.contains("opened"));
// popup.addEventListener("click", (e) => {
//   console.log(e.composedPath().includes(popup));
//   const withinBoundaries = e.composedPath().includes(popup);
//     if (!withinBoundaries) {
//       popup.style.visibility = "hidden"; // скрываем элемент т к клик был за его пределами
//     }
// });
