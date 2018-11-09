
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  // menu[0].classList.toggle('menu--open');
  menu.classList.toggle('menu--open')
  // menu.forEach(item => console.log(item.classList));
}

// Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu'); 
const menu = document.querySelector('.menu'); 

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

