
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

const action = new TimelineMax({paused: true})

action.to('.menu', 1, {x:-87.5, y: -182, scale:.5});

const play = document.querySelector("#play");

play.onclick = function() {
  action.play();
}