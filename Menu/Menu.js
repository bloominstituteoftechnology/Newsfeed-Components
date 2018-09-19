
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  tl.staggerFrom('li', 1, {cycle: {
    x: [-50],
    scale: [.5, 2],
  }, autoAlpha: 0, ease:Power1.easeOut}, 0.1);
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

tl = new TimelineLite();
menuButton.addEventListener('click', toggleMenu);
