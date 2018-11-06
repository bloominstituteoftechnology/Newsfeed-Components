const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
  if (Array.from(menu.classList).includes("menu--open")) {
    TweenMax.to(menu, 0, { x: 0 });
    TweenMax.to(menu, 0.35, { x: 350 });
  } else {
    TweenMax.to(menu, 0, { x: 350 });
    TweenMax.to(menu, 0.25, { x: 0 });
  }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);
