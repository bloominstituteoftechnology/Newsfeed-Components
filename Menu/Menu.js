
const toggleMenu = () => {
  TweenMax.to(".menu",2,{
    opacity:1,
    ease: Power4.easeOut,
  });
  TweenMax.staggerFrom("li",2,{
    opacity:1,
    y:1000,
  },0.3)
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);