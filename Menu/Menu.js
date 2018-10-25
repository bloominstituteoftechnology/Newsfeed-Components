
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference. 
  menu.classList.toggle('menu--open');
}



// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', event => toggleMenu(event));


window.addEventListener('load', function(event) {
  console.log('first event');
});

menuButton.addEventListener('click', function(event) {
  const timeLine = new TimelineMax();
  timeLine.from('.menu', 1, {x:-300});
  // TweenMax.from('.menu-button', 2, {opacity:0, scale: 3, delay:2});
  // TweenMax.from('.articles', 1, {opacity:0, scale: 0});
});
 

// timeLine.from('.header', .5, {scale:0});
// timeLine.from('.articles', 1, {opacity:0, scale: 0});
// timeLine.from('.menu-button', 1, {opacity:0, scale: 3});



