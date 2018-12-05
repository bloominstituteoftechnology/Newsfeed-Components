
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  // console.log("here");
  if(menu.classList.contains("menu--open")) {
    TweenMax.fromTo(menu, 3, {
      x:350
    },{
      x:0
    });
    menu.classList.toggle("menu--open");
  } else {
    menu.classList.toggle("menu--open");
    TweenMax.fromTo(menu, 3, {
      x:0
    },{
      x:350
    });
  }
  
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", () => toggleMenu());

console.log(menuButton);