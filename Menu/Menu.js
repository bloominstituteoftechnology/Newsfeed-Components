window.addEventListener('click', function() {
  TweenMax.to('.menu', 2, { x: -100 });
});
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence
  menu.classList.toggle('menu--open');
  TweenMax.to('.menu', 1, {x: 100});
};

// // Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
const li = document.querySelectorAll('ul li')
// // create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// // Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', function(event) {
  event.stopPropagation();
});
menuButton.addEventListener('click', toggleMenu);

