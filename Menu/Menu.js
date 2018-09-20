const toggleMenu = event => {
  // Toggle the "menu--open" class on your menu reference.
  event.stopPropagation();
  menu.classList.toggle("menu--open");
  if (!tweenMenu.isActive()) {
    tweenMenu.reversed(!tweenMenu.reversed());
  }
  // menu.classList.toggle("menu--closed");
};

let body = document.querySelector("body");
body.addEventListener("click", toggleMenu);

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

let tweenMenu = TweenMax.to(menu, 0.3, { x: 350 }).reverse();

// window.addEventListener("click", function() {
//   TweenMax.fromTo(menu, 1, { x: 0 }, { x: -350 });
// });

// const menuClose = () => {
//   // Toggle the "menu--open" class on your menu reference.
//   event.stopPropagation();
//   window.classList.toggle("menu--open");
//   TweenMax.fromTo(menu, 1, { x: -350 }, { x: 0 });
// };
