const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open') 
}
const animateMenuOut = () => {
  TweenMax.to(menu, 1, {x:350}); 
}
const animateMenuIn = () => {
  TweenMax.to(menu, 1, {x:-350});
}
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('mouseover', () => animateMenuOut());
menu.addEventListener('mouseleave', () => animateMenuIn());   