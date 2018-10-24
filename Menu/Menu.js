
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  // console.log(event);
  menu.classList.toggle('menu--open');
  menuAnim();
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu());


const menuAnim = 
function(){
  TweenMax.fromTo(".menu", 1, {x:-350}, {x:0});
}

const menuAnimRev = 
function() {
  menuAnim.reverse();
}