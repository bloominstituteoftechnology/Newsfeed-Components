//This is the function for vanilla CSS
// const toggleMenu = () => {
//   menu.classList.toggle("menu--open")
// };

// This is the function for animation
let t1 = new TimelineLite();
t1.reversed(true);

const toggleMenu = () => {
  const animation = t1.to(menu, 1, {
    left:0, 
    ease: Back.easeOut.config(1.7)
  }); //need nested function?
  console.log(animation);

  if (t1.reversed()) {
    animation.reverse();
    t1.reversed(false);
    console.log(t1);
  } else {
    animation.play();
    t1.reversed(true);
    console.log(t1);
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

// menu.style.display = 'block';
// TweenMax.to(menu, 2, {
//   x: 100
// })


