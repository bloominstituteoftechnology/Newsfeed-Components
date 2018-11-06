

const toggleMenu = () => {
	// this.menuButton.classList.toggle('menu--open');
	menu[0].classList.toggle('menu--open')
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll('.menu-button');

menuButton[0].addEventListener('click', toggleMenu)

// Using your menuButton reference, add a click handler that calls toggleMenu
