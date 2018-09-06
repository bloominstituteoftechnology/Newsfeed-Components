//This is the function for vanilla CSS
// const toggleMenu = () => {
//   menu.classList.toggle("menu--open")
// };




// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// This is the function for animation
let t1 = new TimelineLite({reversed: true, paused: true});
t1.to(menu, 1, {
  left:0, 
  ease: Back.easeOut.config(1.7)
});
const toggleMenu = () => {
  //need nested function?
  if (t1.reversed()) {
    t1.reverse();
    t1.reversed(false);
  } else {
    t1.play();
    t1.reversed(true);
  }
}

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

// menu.style.display = 'block';
// TweenMax.to(menu, 2, {
//   x: 100
// })
