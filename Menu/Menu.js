
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  tl
    .staggerFrom('div.menu--open', .5, {
      cycle: {
        y: [100],
      }, autoAlpha: 0, ease: Power1.easeOut
    }, 0.2)
    .staggerFrom('div.menu--open li', 2, {
      cycle: {
        x:[100,-100], 
      }, autoAlpha: 0, ease: Back.easeInOut
    }, -0.2);

}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

tl = new TimelineLite();
menuButton.addEventListener('click', toggleMenu);
