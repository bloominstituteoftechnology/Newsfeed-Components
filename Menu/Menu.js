
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  const tl = new TimelineLite();
  if (menu.classList.contains('menu--open')) {
    tl.to(menu, 0, {
      x: -350,
      opacity: 0,
    })
      .to(menu, 1, {
        x: 0,
        opacity: 1,
      });
  }

  else {
    tl.to(menu, 1, {
      x: -350,
      opacity: 0,
    });
  }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// menu = Array.from(menu).map(domEl => new Menu(domEl));

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu());
