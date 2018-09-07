const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
}
 // Start Here: Create a reference to the ".menu" class
const menu;
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton;
const menuButton = document.querySelector('.menu-button');
 // Toggle the "menu--open" class on your menu refence.
const toggleMenu = function(event){
  menu.classList.toggle('menu--open')
};
 // Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
 //How id actually write it
 // menuButton.addEventListener('click', function(event){
//   menu.classList.toggle('menu--open')
// }); 