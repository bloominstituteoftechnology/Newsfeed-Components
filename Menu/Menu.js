//Step 4
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open')
}

// Step 1 Start Here: Create a reference to the ".menu" class
//If using selectorAll remember [0] since there is only one item.
const menu = document.querySelectorAll(".menu")[0];

// Step 2 create a reference to the ".menu-button" class
const menuButton = document.querySelector(".header .menu-button");

// Step 3 Using your menuButton reference, add a click handler that calls toggleMenu

//This code did not work. Needs to ref the menu button.
// document.querySelector(".header .menu-button").addEventListener("click", function( event ) {
 
// }, false);

menuButton.addEventListener('click', toggleMenu);  
