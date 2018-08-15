// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
let menuOpen = false;
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", () => {
  // Toggle the "menu--open" class on your menu refence. made this an anonymous function
  
  //menu.classList.toggle("menu-close");

  if (menuOpen === false) {
    menu.classList.toggle("menu-open");
    TweenMax.fromTo(menu, 0.3, {left:-350}, {left:0});
    menuOpen = true;
  } else if(menuOpen === true) {
    TweenMax.fromTo(menu, 0.3, {left:0}, {left:-350});
    menuOpen = false;
  }
});

