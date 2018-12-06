
const toggleMenu = () => {
  menu.classList.toggle('menu--open')
}
const menuAmimate = () => {
  if(menu.classList.contains('menu--open')){
    TweenMax.to('.menu-button', .2, {scaleX: 1.5})
    articles2.classList.add('articles--sml')
  } else {
    TweenMax.to('.menu-button', .2, {scaleX: 1})
    articles2.classList.remove('articles--sml')
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

const articles2 = document.querySelector('.articles');

menuButton.addEventListener('click', () => {toggleMenu(); menuAmimate();})
// Using your menuButton reference, add a click handler that calls toggleMenu
