const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  page.classList.toggle('move-right');
  navButton.classList.toggle('change');
}

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

const navButton = document.querySelector('.header-container');

const page = document.querySelector('.container');

menuButton.addEventListener('click', () => {
  toggleMenu();
})
