
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
  
}

// Start Here: Create a reference to the ".menu" class
let menu;
menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
let menuButton;
menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click',toggleMenu);
