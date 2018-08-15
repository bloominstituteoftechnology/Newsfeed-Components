// Disabled this funciton to allow jQuery to work.
// const toggleMenu = () => {
  // // Toggle the "menu--open" class on your menu refence.
  // menu.classList.toggle('menu--open')
// }
// My first jQuery! Copied straight from the docs. :)
// On .menu-button click, the menu fades in and out.
$(document).ready(function(){
  $(".menu-button").click(function(){
      $(".menu").fadeToggle(150);
  });
});
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', (event) => {
  toggleMenu();
})