
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
 menu.classList.toggle('menu--open');
 //adds an event listener to the window that will close the menu
 window.addEventListener('mouseup', (event) => {
   if (event.target != menu && event.target != menuButton && event.target.parentNode.parentNode != menu) {
     menu.classList.remove('menu--open');
   }
 }); 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// window.addEventListener('mouseup', (event) => {
//   if (event.target != menu && event.target != menuButton && event.target.parentNode.parentNode != menu) {
//     menu.classList.remove('menu--open');
//   }
// })
