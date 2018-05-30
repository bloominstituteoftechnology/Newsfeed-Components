const toggleMenu = () => {
  console.log("Did we even get in here?");
  menu.classList.toggle("menu--open");
  // Toggle the "menu--open" class on your menu refence.
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);
const studentButton = document.querySelector(".student-button");
