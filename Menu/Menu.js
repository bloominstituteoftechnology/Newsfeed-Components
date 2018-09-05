
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  let menuOpen = document.querySelector('.menu--open');
  if(menuOpen.style.display === 'block'){
    menuOpen.style.display = 'none';
  } else if(menuOpen.style.display === 'none'){
    menuOpen.style.display = 'block';
  }

}

// Start Here: Create a reference to the ".menu" class
const menu;
menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton;
menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', toggleMenu); 