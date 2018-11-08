
const toggleMenu = () => {
  menu[0].classList.toggle('menu--open')// Toggle the "menu--open" class on your menu refence.
}

// Start Here: Create a reference to the ".menu" class
const menu = document.getElementsByClassName('menu')
console.log(document.getElementsByClassName('menu'));
// create a reference to the ".menu-button" class
const menuButton = document.getElementsByClassName('menu-button');
console.log(menuButton);
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton[0].addEventListener('click', toggleMenu);