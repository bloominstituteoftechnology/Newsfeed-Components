
const toggleMenu = (event) => {
  // Toggle the "menu--open" class on your menu reference. 
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", () => {toggleMenu(event)});

// code for menu to slide off screen when anywhere else is clicked.
document.querySelector('.header').addEventListener('click', () => {dismissMenu(event)})

document.querySelector('.articles').addEventListener('click', () => {dismissMenu(event)})

const dismissMenu = (event) => {
  let ignore = document.querySelector('.menu-button');
  let target = event.target;
  event.stopPropagation();
  if (target !== ignore) {
    menu.classList.remove ('menu--open');
  }
}