
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence.
}

const cantToggle = () => {
  return 'cant be clicked';
}

// Start Here: Create a reference to the ".menu" class
let menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
let menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();

  //event for clicking outside of the menu button
  // window.addEventListener('click', (e) => {
  //   e.stopPropagation();
  //   if (toggleMenu() !== true) {
  //     cantToggle();
  //   } else {
  //     toggleMenu();
  //   }
  // });
})