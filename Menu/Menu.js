
const toggleMenu = (event) => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open'); 
  console.log('It works');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu


menuButton.addEventListener('click', function(e) {
  toggleMenu();
  // console.log('Is this working?');
});