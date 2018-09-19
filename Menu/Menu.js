
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

// Goes up one elvel in the dom tree gets all div except the one with a menu class
// Adds an event listener to each div the will togel the menu if its open
menu.parentNode.querySelectorAll('div:not(.menu)').forEach(n => {
  n.addEventListener('click', e => {
    e.stopPropagation();
    if (menu.classList.contains('menu--open')) {
      toggleMenu();
    }
  });
});

menuButton.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
})
