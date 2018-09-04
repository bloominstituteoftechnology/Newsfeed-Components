
const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence.

  // just in case there are click events higer up on the DOM being listened for
  e.stopPropagation();
  // display or hide the menu
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);


// Saturday lecture codepen:
// codepen.io/lambdaschool/pen/GBaBKB?editors=1011
