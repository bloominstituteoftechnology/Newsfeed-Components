// Disabled this funciton to allow jQuery to work.
// const toggleMenu = () => {
  // // Toggle the "menu--open" class on your menu refence.
  // menu.classList.toggle('menu--open')
// }
// My first jQuery!  :) On .menu-button click, the
// menu slides in from the right-to-left.
$(".menu-button").click(function(event){
  event.stopPropagation();
  $(".menu").animate({width:'toggle'},350);
});
// This jQuery just allows you to click anywhere on
// the articles to close the menu.
$('html').click(function(){
  $(".menu").animate({width:'hide'},350);
});

// These are no longer needed.
// Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
// const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener('click', (event) => {
//   toggleMenu();
// })