const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  // menu.classList.toggle('menu--open');
  TweenMax.to(menu, 1, {
    width: 350
  });

  TweenMax.to('.articles', 1, {
    paddingLeft: 350
  });

  TweenMax.to('.menu ul li', 1, {
    opacity: 1
  });

  TweenMax.staggerFrom(
    '.menu ul li',
    1,
    {
      x: -500,
      delay: 0.3
    },
    0.2
  );
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
