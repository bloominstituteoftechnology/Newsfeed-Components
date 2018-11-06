
const toggleMenu = (menu) => {
  // Toggle the "menu--open" class on your menu refence. 
  this.menu.classList.toggle('.menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menu = this.menuButton.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = this.menuButton.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
this.menuButton.addEventListener('click', this.toggleMenu.bind(this))
