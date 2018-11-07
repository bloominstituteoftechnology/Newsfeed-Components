
const toggleMenu = () =>{ 
    menu.classList.toggle('menu--open')
  }
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);


menuButton.addEventListener('click', function(){
  TweenMax.to('.menu-button', 1, {x:100});

menuButton.addEventListener('click', function(){
  TweenMax.to('.menu-button', 1, {x:0});
})
})