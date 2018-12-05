
const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence.
  // console.log("here");
  e.stopPropagation();
  if(menu.classList.contains("menu--open")) {
    console.log("start wait")
    setTimeout(function() {
      menu.classList.toggle("menu--open");
      console.log("wait done")
     // wait for animation to stop to toggle off display: block
     }, 300);
    TweenMax.fromTo(menu, .3, {
      x:0,
      opacity:1
    },{
      x:-350,
      opacity:0
    });
  } else {
    menu.classList.toggle("menu--open");
    TweenMax.fromTo(menu, .3, {
      x:-350,
      opacity:0
    },{
      x:0,
      opacity:1
    });
  }
}

const closeMenu = (e) => {

  if(menu.classList.contains("menu--open")) {
    toggleMenu(e);
  }
}

const catchMenuClick = (e) => {
  // console.log("here");
  e.stopPropagation();
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", (e) => toggleMenu(e));
// Add listeners to close menu when click on anywhere but menu
window.addEventListener("click", (e) => closeMenu(e)); // only passing event to closeMenu since closeMenu calls toggleMenu for sake of DRYness
menu.addEventListener("click", (e) => catchMenuClick(e));