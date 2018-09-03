
let toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  //menu.classList.toggle('menu--open');

  //toggle the menu using greensock .reversed property
  t.reversed(!t.reversed());
}

// Start Here: Create a reference to the ".menu" class
let menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
let menuButton = document.querySelector('.header .menu-button');

menuButton.addEventListener('click', toggleMenu);

//Create greensock Tween - initializing .reversed to true
let t = TweenMax.to(menu, 0.4, { left: 0, ease: Power1.easeOut }).reversed(true);