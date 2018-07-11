const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence.
  e.stopPropagation();
  menu.classList.contains('menu--open') ? animClose() : animOpen();
  menu.classList.toggle('menu--open');
}

const closeMenu = () => {
  if(menu.classList.contains('menu--open')){
    animClose();
    menu.classList.remove('menu--open');
  }
}

const animOpen = () => {
  TweenLite.to(menu, 2, {left: 0, ease: Bounce.easeOut});
}

const animClose = () => {
  TweenMax.to(menu, 2, {left: -360});
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', event => toggleMenu(event));

document.querySelector('body').addEventListener('click', closeMenu);

document.querySelector('.menu ul').addEventListener('click', event => event.stopPropagation());
