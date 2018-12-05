const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');


menu.addEventListener('click', () => {
  console.log('clicked');
});

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
  console.log('clicked');
});





// Using your menuButton reference, add a click handler that calls toggleMenu