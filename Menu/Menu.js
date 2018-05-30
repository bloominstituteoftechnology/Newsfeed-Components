let menu = document.querySelector('.menu');
let menuButton = document.querySelector('.menu-button');
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence.
}
menuButton.addEventListener("click", toggleMenu);
// Using your menuButton reference, add a click handler that calls toggleMenu
