
const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence.
  e.stopPropagation();
  menu.classList.toggle('menu--open'); 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// add click handler to close menu by clicking anywhere on the page but on the menu itself
const htmlBody = document.querySelector('body');
htmlBody.addEventListener('click', function(){
  menu.classList.remove('menu--open');
});
menu.addEventListener('click', function(e) {
  e.stopPropagation();
});