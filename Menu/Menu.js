
const toggleMenu = () => {
  if(!menu.classList.contains('menu--open')) {
    menu.classList.toggle('menu--open');
    TweenMax.to(menu, 0, {x: -500});
    TweenMax.to(menu, .25, {x: 0});
  } else {
    TweenMax.to(menu, .25, {x: -500});
    TweenMax.to(menu, 0, {x: 0});
    //We setTimeout here to allow the animation of the menu going off screen before it's style is set to display: none
    setTimeout(() =>{
      menu.classList.toggle('menu--open');
    }, 250);
    
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu());