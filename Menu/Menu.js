
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".header .menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu

// document.querySelector(".header .menu-button").addEventListener("click", function( event ) {
 
// }, false);

menuButton.addEventListener('click', toggleMenu);  
