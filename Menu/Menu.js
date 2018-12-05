
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  // console.log("here");
  if(menu.classList.contains("menu--open")) {
    console.log("start wait")
    let slideTimeout = setTimeout(function() {
      slideTimeout = null;
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

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", () => toggleMenu());

console.log(menuButton);