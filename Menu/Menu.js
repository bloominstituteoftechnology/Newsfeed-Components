// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  if (menu.classList.contains('menu--open')) {
    TweenMax.to('.menu', 3, {x: 300});
  } else {
    TweenMax.to('.menu', 3, {x: -400});
  }
}


// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
