
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open')
}

const d = document
// Start Here: Create a reference to the ".menu" class
const menu = d.getElementsByClassName('menu')[0]
// create a reference to the ".menu-button" class
const menuButton = d.getElementsByClassName('menu-button')[0]
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener ('click', () => toggleMenu())
