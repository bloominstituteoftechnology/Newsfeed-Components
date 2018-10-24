
const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence.
  e.stopPropagation();
  menu.classList.toggle('menu--open');
  if (menu.classList.contains('menu--open')){
    animateMenu(true, menu);
  } else {
    animateMenu(false, menu);
  }
}

const animateMenu = function(bool, menu) {
  if (bool) {
    TweenLite.to(menu, .8, {x:350, y:0, ease:Power1.easeOut});
  } else {
    TweenLite.to(menu, .8, {x:0, y:0, ease:Power1.easeOut});
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// add click handler to close menu by clicking anywhere on the page but on the menu itself
const htmlBody = document.querySelector('body');
htmlBody.addEventListener('click', function(){
  if (menu.classList.contains('menu--open')) {
    animateMenu(false, menu);
    menu.classList.remove('menu--open');
  }
});
menu.addEventListener('click', function(e) {
  e.stopPropagation();
});