// Variables
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const articleContainer = document.querySelector('.articles')

let menuOpen = false;
// Callback Functions
const toggleMenu = () => {
  $(menu).slideToggle("slide");
  menuOpen = true;
}

const toggleMenuClosed = () => {
  if (menuOpen) {
    $(menu).slideToggle("slide");
    menuOpen = false;
  }
}

// Event Listeners

menuButton.addEventListener('click', toggleMenu);

articleContainer.addEventListener('click', toggleMenuClosed);