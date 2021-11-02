// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  const menus = document.querySelectorAll(".menu");
  const arrows = document.querySelectorAll(".arrow");
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("mainMenu");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("locked");
  });

  if (arrows) {
    for (const arrow of arrows) {
      arrow.previousElementSibling.classList.add("parent");
    }
  }

  if (menus) {
    for (const menu of menus) {
      console.log("m", menu);

      menu.addEventListener("click", e => {
        e.preventDefault();
        menu.classList.toggle("active");
      });
    }
  }
});
