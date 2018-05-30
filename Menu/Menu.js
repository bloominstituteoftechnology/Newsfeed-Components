
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  //let toggle = false;
  menu.classList.toggle('menu--open');
 // toggled = !toggled;
 // if(toggled == false);
 // TweenMax.from(menu, 1, {left:-100});
  //if(toggled == true);
 // TweenMax.to(menu,1, {right:100});
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
