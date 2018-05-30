
let init = true;
let menuHovered = false;

function isHovered(e) {
  return (e.parentElement.querySelector(':hover') === e);
}

function checkMenuHovered (e) {

}





const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  menu.classList.toggle('menu--close');
  if (init) {
    menu.classList.remove('menu--init');
    init = false;
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class

const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);


let body = document.querySelector('body');

const closeOpenMenu = function(event) {
  console.log ('click');
  if (isHovered(menuButton)) {
    return;
  }

  let isMenuOpen = Array.from(menu.classList).includes('menu--open');

  if (isMenuOpen && !isHovered(menu)) {
    toggleMenu();
  }
}

body.addEventListener("click", closeOpenMenu);