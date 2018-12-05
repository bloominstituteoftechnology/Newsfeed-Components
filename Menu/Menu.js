let isMenuOpen = false;

const toggleMenu = e => {
  e.stopImmediatePropagation();
  if (isMenuOpen) {
    isMenuOpen = false;
    TweenMax.to(menu, 1, { x:-350, ease:Power2.easeIn })
  } else {
    isMenuOpen = true;
    TweenMax.to(menu, 1, { x:350, ease:Power2.easeOut })
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Menu slide-in/slide-out animation
// ---------------------------------

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", e => toggleMenu(e));

// Close menu if clicking outside of it
window.addEventListener("click", () => {
  if (isMenuOpen) {
    isMenuOpen = false;
    TweenMax.to(menu, 1, { x:-350, ease:Power2.easeIn })
  }
})

// Related to code above - do not close the menu if clicking inside of it
menu.addEventListener("click", e => e.stopImmediatePropagation());
