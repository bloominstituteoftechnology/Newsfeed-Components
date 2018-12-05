
const toggleMenu = () => {
  menu.classList.toggle('menu--open')
}
const menuAmimate = () => {
  if(menu.classList.contains('menu--open')){
    TweenMax.to('.menu-button', 1, {scaleX: 1.5})
  } else {
    TweenMax.to('.menu-button', 1, {scaleX: 1})
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {toggleMenu(); menuAmimate();})
// Using your menuButton reference, add a click handler that calls toggleMenu
