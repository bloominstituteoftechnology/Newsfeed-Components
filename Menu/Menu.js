
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
  TweenMax.fromTo([menuAnimate], 2, {x: -1000}, {x: 0});
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu.menu-slide");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

let headerAnimate = document.querySelector(".header");
TweenMax.fromTo([headerAnimate], .75, {y:-500}, {y:0});

let menuAnimate = document.querySelector (".menu-slide")

