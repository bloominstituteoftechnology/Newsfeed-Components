const toggleMenu = () => {
  menu.classList.toggle("menu--open");
};
const toggleLinks = () => {
  menuItems.classList.toggle("menu__list--show");
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
const menuItems = document.querySelector("ul");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", _ => {
  toggleMenu();
  toggleLinks();
});
