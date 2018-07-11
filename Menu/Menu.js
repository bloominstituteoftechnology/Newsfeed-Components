//Console Log Methods
const itemClick = () => {
  console.log("item was clicked");
};

const itemMouseover = () => {
  console.log("item was moused");
}

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference. 
  menu.classList.toggle("menu--open"); 
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
menu.addEventListener("mouseover", itemMouseover);

// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll(".menu-button");
menuButton.addEventListener("click", itemClick);

// Using your menuButton reference, add a click handler that calls toggleMenu
menu.addEventListener("click", toggleMenu)