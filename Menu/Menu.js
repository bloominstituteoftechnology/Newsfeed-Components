
let isMenuOpen = false;
const html = document.querySelector('html');

const openMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  TweenMax.to('.menu', 1.5, {left:0});
  isMenuOpen = true;
}

const closeMenu = () => {
  TweenMax.to('.menu', 1.5, {left:-350});
  isMenuOpen = false;
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', function(e) {
  e.stopPropagation();
  if (!isMenuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

window.addEventListener('click', function() {
  if(isMenuOpen) {
    closeMenu();
  }
})

