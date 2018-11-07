
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menuButton.addEventListener('click', menu.toggleMenu.bind(menu))
  menu.classList.toggle('menu--open');
}



// Start Here: Create a reference to the ".menu" class
const menu = document.getSelection('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.getSelection('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
