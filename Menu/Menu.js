
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('.menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {
  menu.classList.toggle('menu--open');
});

// menuButton.addEventListener('mouseout', () => {  // also for testing the hover menu 
//   menu.classList.toggle('menu--open');
// });

// menu.addEventListener('mouseover', () => { // want to make this function so that the menu stays up with mouse over the menu, still working on it
//   menu.classList.toggle('menu--open');
// });
