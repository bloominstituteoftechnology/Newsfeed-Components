
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  console.log("menuButton clicked");
  menu.classList.toggle(".menu--block");
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class

const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", this.toggleMenu)
// Using your menuButton reference, add a click handler that calls toggleMenu
