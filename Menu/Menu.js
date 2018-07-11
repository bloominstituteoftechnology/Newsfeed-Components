
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open') ?
    TweenMax.to(menu, 1.5, {x: 325, ease: Power2.easeOut}) :
    TweenMax.to(menu, 1.25, {x: -325, ease: Power3.easeIn});
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuBtn = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuBtn.addEventListener('click', e => {
  toggleMenu();
});