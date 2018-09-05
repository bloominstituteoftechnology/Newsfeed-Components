
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  if (menu.classList.contains('menu--open')) {
    TweenMax.to(menu, .25, {left: -250, opacity: 0, onComplete: () => {menu.classList.remove('menu--open')}});
   } else {
    TweenMax.to(menu, .25, {left: 0, opacity: 1, onComplete: menu.classList.add('menu--open')});
   }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', function(event) {
  return toggleMenu();
});

//BONUS - makes menu close upon click outside of open menu
const bodyClick = document.querySelector('body');

bodyClick.addEventListener('click', function(event) {
  if (event.target.closest('.menu-button') || event.target.closest('.menu')) {
    return;
  } else {
  menu.classList.remove('menu--open');
  }
});