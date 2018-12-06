
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle("menu--open");
  if (menu.classList.contains("menu--open")) {
    TweenMax.to(menu, 2, {
    left: -355,
    ease: Back.easeOut
    });
    console.log("this ran")
  } else {
    TweenMax.to(menu, 2, {
      left: -25,
      ease: Back.easeOut
      });
      console.log("this too")
  }
  
  
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu")
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button")
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

