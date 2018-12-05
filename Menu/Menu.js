const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.getElementsByClassName('menu')[0];
console.log(menu); //Check = Positive

// create a reference to the ".menu-button" class
const menuButton = document.getElementsByClassName('menu-button')[0];
console.log(menuButton); //Check = Positive

// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', () => toggleMenu());