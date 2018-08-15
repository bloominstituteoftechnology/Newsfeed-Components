const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  // menu.classList.toggle('menu--open');
  if (menu.style.left === '0px') {
    TweenMax.to(menu, 0.5, { left: '-350px' });
  } else {
    TweenMax.to(menu, 0.5, { left: 0 });
  }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
