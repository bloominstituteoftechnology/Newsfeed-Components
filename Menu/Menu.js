
const toggleMenu = document.querySelector('.menu--open'); { console.log(toggleMenu);
  // Toggle the "menu--open" class on your menu reference. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');{
  console.log(menu);
}
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu');{
  console.log(menu);
}
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => menuButton.classList.toggle(toggleMenu));