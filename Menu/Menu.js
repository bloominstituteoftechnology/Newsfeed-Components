let toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
 let menuOpen = menu.classList.toggle('menu--open');
 menuOpen ;
 console.log('this');
 
}

// Start Here: Create a reference to the ".menu" class
let menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
let menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', (e) => {
  toggleMenu();
});
// toggleMenu();