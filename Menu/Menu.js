const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  if (!menu.classList.contains('menu--open')) {
    menu.classList.toggle('menu--open');
    TweenMax.fromTo('.menu', 1, {
      x: -350
    }, {
      x: 0
    });
  } else {
    TweenMax.fromTo('.menu', 1, {
      x: 0
    }, {
      x: -350,
      onComplete: () => menu.classList.toggle('menu--open')
    });
  }


}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);