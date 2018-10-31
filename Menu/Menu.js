
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
  TweenMax.to(menu, 4, {left:560, opacity: 1, ease:Power4.easeIn});
  menu.style.width = '800px';
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

const list = document.querySelectorAll('.menu ul li');

list.forEach(item => item.addEventListener('click', () => TweenMax.to(list, 5, {rotation:360, scale:1, ease:Power4.easeOut})));

const body = document.querySelector('body');

document.body.style.backgroundImage = "url('/assets/green-background.jpg')";

const heading = document.querySelector('.header h1');

heading.style.color = 'black';
