let toggle = false;

const toggleMenu = () => {
  console.log("Was " + toggle);
  if (toggle) {
    toggle = false;
    TweenMax.to(menu, 1, { x:-350, ease:Power2.easeIn })
  } else {
    toggle = true;
    TweenMax.to(menu, 1, { x:350, ease:Power2.easeOut })
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);
