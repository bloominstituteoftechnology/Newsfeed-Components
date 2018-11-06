
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  console.log(menu.classList.contains('menu--open'))
  if(menu.classList.contains('menu--open')) {
    TweenMax.fromTo((menu), .5, {x:-350}, {x:0});
  } else {
    TweenMax.fromTo((menu), .5, {x:0}, {x:-350});
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
