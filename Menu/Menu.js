// Start Here: Create a reference to the ".menu" class
let menu=document.querySelector('.menu');
// create a reference to the ".menu-button" class
let menuButton= document.querySelector('.menu-button')
// Using your menuButton reference, add a click handler that calls toggleMenu


const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
   menu.classList.toggle('menu--open')
}


menuButton.addEventListener('click', toggleMenu);