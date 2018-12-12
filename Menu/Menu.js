
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  this.content.classList.toggle("toggle-on");
}

// Start Here: Create a reference to the ".menu" class
const menu = documentSelector(".menu");


// create a reference to the ".menu-button" class
const menuButton = documentSelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener("click", ( menuButton.classList.toggle("toggle-on"));)