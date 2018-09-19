const toggleMenu = () => {
  menu.classList.toggle("menu--open");

  if (menu.classList.contains("menu--open")) {
    TweenMax.to(".menu", 1, { left: "0px" });
  } else {
    TweenMax.to(".menu", 1, { x: "-350px" });
  }
  // Toggle the "menu--open" class on your menu refence.
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);
