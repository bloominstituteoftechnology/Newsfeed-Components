const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class

const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu

// menuButton.addEventListener('click', toggleMenu)
const header = document.querySelector('.header');

menuButton.addEventListener("click", (event) => {
  menu.classList.toggle("menu--open");
  TweenMax.to('.menu', 2, {
    left: 0,
    ease:Power2.easeInOut
  });
});
