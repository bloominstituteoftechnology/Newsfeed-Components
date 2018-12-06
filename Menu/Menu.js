
const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence. 
  e.stopPropagation();
  menu.classList.toggle("menu--open")
  //checks if the menu element has the class menu--open in it, if it does/doesn't will play the appropriate animation
  if (menu.classList.contains("menu--open")) {
    TweenMax.to(menu, 1, {
      left: 0,
      ease: Back.easeOut
    });
   } else {
    TweenMax.to(menu, 2, {
      left: -350,
      ease: Back.easeOut
    })
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener("click", (e) => toggleMenu(e));

