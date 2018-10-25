const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  if (menu.classList.contains('menu--open')) {
    TweenMax.to(menu, 1.25, {
      x: -350,
      onComplete: () => menu.classList.remove('menu--open'),
      ease: Power2.easeIn
    });
  } else {
    menu.classList.add('menu--open');
    TweenMax.fromTo(menu, 1, { x: -350 }, { x: -25, ease: Sine.easeIn });
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
