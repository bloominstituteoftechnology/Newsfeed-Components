
let isOpen = false;

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  if(isOpen === false) {
    menu.style.animation = "slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    isOpen = true;
    menu.classList.toggle("menu--open");
  } else {
    menu.style.animation = "slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    isOpen = false;
    menu.classList.toggle("menu--open");
  }
}

const closeMenu = () => {
  if(isOpen) {
    menu.classList.toggle("menu--open");
    isOpen = false;
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  return toggleMenu();
});

window.addEventListener("click", () => closeMenu());