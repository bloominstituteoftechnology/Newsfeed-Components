const isDescendant = (parent, child) => {
  let node = child.parentNode;
  while (node != null) {
    if (node === parent) return true;
    node = node.parentNode;
  }
  return false;
};

const closeMenu = e => {
  if (e.target !== menu && !isDescendant(menu, e.target)) {
    TweenMax.to(menu, 1.25, {
      x: -350,
      onComplete: () => menu.classList.remove('menu--open'),
      ease: Power2.easeIn
    });
  }
};

const toggleMenu = e => {
  e.stopPropagation();
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.add('menu--open');
  TweenMax.fromTo(menu, 1, { x: -350 }, { x: -25, ease: Sine.easeIn });
  // Make the menu close if elsewhere is clicked
  document.querySelector('body').addEventListener('click', closeMenu);
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
