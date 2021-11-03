// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
  const menus = document.querySelectorAll(".menu");
  const arrows = document.querySelectorAll(".arrow");
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("mainMenu");
  const body = document.querySelector("body");
  const charts = document.querySelectorAll(".charts__chart-body");
  const tabs = document.querySelectorAll(".tabs__link");
  const tabItem = document.querySelectorAll(".tabs__item");
  let documentWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
  const movableNones = document.querySelectorAll("*[data-move]");

  window.addEventListener("resize", function () {
    documentWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
    movableNones.forEach(node => {
      moveNode(node);
    });
  });

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
      // console.log("m", menu);

      menu.addEventListener("click", e => {
        e.preventDefault();
        menu.classList.toggle("active");
      });
    }
  }

  if (charts) {
    for (const chart of charts) {
      chart.style.height = chart.dataset.height + "px";
    }
  }

  if (tabs) {
    for (const tab of tabs) {
      tab.addEventListener("click", e => {
        e.preventDefault();
        tabItem.forEach(el => {
          //tab.style.display = "none";
          el.classList.remove("active");
        });
        // console.log("tab", e.path[1].hash);
        document.querySelector(`${e.target.hash}`).classList.add("active");
        // console.log("tabItem", tabItem[0].classList);
        document.querySelectorAll(".tabs__tab").forEach(el => {
          el.classList.remove("active");
        });
        tab.parentNode.classList.add("active");
      });
    }
  }

  if (documentWidth < 961) {
    movableNones.forEach(node => {
      moveNode(node);
    });
  }

  function moveNode(node) {
    let [target, order, resolution] = node.dataset.move.split(",");
    // console.log("ee: ", target, " ", order, " ", resolution);
    if (resolution < documentWidth)
      document
        .getElementsByClassName("advantage__item-box")[0]
        .appendChild(node);
    else document.getElementsByClassName(target)[0].after(node);
  }
});
