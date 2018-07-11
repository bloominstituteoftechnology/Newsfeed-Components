
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
  TweenMax.from(".menu", 2, {x: -400, ease:Bounce.easeOut});
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);


