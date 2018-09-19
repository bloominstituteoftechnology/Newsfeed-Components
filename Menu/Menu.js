
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
// create a reference to the ".menu-button" class:
// for some reason this started with const when I started it.
 menuButton.addEventListener('click', e => {
  menuButton.classList.toggle(toggleMenu());
  // console.log('this is clicking the menu button')


});
// Using your menuButton reference, add a click handler that calls toggleMenu
