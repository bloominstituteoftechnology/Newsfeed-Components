
const toggleMenu = () => {
  menu.classList.toggle('menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', (e) => toggleMenu(e, menu))

// Using your menuButton reference, add a click handler that calls toggleMenu
