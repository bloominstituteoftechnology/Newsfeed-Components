
const toggleMenu = () => {
  menu.classList.toggle("menu--open");
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener("click", toggleMenu)

menuButton.addEventListener("click", () => {
  TweenMax.staggerFrom(".menu",1, {
    left:-100,
    ease:Elastic.easeOut});
});

TweenMax.from(".header", 2, {top:-100});

