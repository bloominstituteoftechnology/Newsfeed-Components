
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  console.log("toggleMenu was called");
  menu.classList.toggle("menu--open");
  hamburger.classList.toggle('burgerClicked')
}

// Start Here: Create a reference to the ".menu" class

let menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class

let menuButton = document.querySelector(".hamburgerBox");
let hamburger = document.querySelector('.hamburgerIcon');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', e => {
  toggleMenu();
})