// Variables
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const articleContainer = document.querySelector('.articles')


// Callback Functions
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
  $(menu).slideToggle("slide");
}

// Event Listeners
menuButton.addEventListener('click', toggleMenu);

// if (!(menu.classList.toggle('menu--open'))) {
//   articleContainer.addEventListener('click', toggleMenu);
// }