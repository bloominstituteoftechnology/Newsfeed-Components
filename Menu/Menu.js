
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  if (menu.classList.contains("slide-right")) {
    menu.classList.replace("slide-right", "slide-left");
  } else if (menu.classList.contains("slide-left")) {
    menu.classList.replace("slide-left", "slide-right");
  } else {
    menu.classList.toggle("slide-right");
  }
}	
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu")
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu); 