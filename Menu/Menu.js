
let menuTog = 0;

const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence.
  // menu.classList.toggle('menu--open'); // Disabled for stretch goal

  e.stopPropagation();

  if (menuTog === 0) {
    enter();
    menuTog ++;
  }
  else if (menuTog === 1) {
    out();
    menuTog--;
  }

};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

const body = document.querySelector('body');

body.addEventListener('click', exitMenu); 

function exitMenu() {
  if (menuTog === 1) {
    out();
    menuTog--;
  }
  
}

let tl = new TimelineLite({paused:true});
tl.to(menu, 0.6, {left: 0 + 'px', opacity: 1, ease: Power2.easeIn});
menu.animation = tl;

function enter() {
  menu.animation.play();
}

function out() {
  menu.animation.reverse();
}