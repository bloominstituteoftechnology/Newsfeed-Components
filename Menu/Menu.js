const toggleMenu = (menu) => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
  console.log('check');
};

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu());

menu.classList['menu--open'];
// console.log(menuButton.classList);