
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  menu.classList.toggle('slide');
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", toggleMenu);
document.addEventListener('click', (event) => {
  if (event.target !== menuButton && menu.classList.contains('menu--open')) {
    menu.classList.toggle('slide');
  }
})
// Using your menuButton reference, add a click handler that calls toggleMenu
