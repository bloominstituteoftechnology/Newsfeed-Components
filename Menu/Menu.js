const toggleMenu = () => {
  menu.classList.toggle('menu--open');
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// console.log(menuButton);
menuButton.addEventListener('click', toggleMenu);
// Using your menuButton reference, add a click handler that calls toggleMenu
