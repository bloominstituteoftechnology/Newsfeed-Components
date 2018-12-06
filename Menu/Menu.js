// Variables
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
const articleContainer = document.querySelector('.articles')

// Callback Functions
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  $(menu).slideToggle("slide");
}

const toggleMenuClosed = () => {
  menu.style.display = "none";
}

// Event Listeners

menuButton.addEventListener('click', toggleMenu);

articleContainer.addEventListener('click', toggleMenuClosed);