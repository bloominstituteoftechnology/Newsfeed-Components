
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference.
  menu.classList.add('menu--open'); // Make the menu visible
  if (flag) { // Open menu
    TweenMax.to(menu, 1, {x:0, opacity:1});
    flag = false;
  } else { // Close menu
    flag = true;
    TweenMax.to(menu, 1, {x:-300, opacity:0});
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

//Make the menu retract
TweenMax.to(menu, 1, {x:-300});

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// Get reference to the body
const body = document.querySelector('html');

// Add click handler on body to close menu if open
body.addEventListener('click', function(event) {
  if(event.target === menuButton || event.target.parentNode.parentNode === menu) return;  // if click on menu links or menu button, do nothing
  if(flag) return; // menu is closed
  TweenMax.to(menu, 1, {x:-300, opacity:0});
  flag = true;
})

//Flag to know if the menu needs to open or close
let flag = true;
