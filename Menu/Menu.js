let menuToggle = false;

const toggleMenu = () => {
  if (menuToggle === false) {
    setTimeout(function() {
      menuToggle = true;
    }, 500);
    menu.classList.toggle("menu--open");
    menu.classList.remove("menu--closed");
    menuItems.classList.toggle("menu__list--open");
    menuItems.classList.remove("menu__list--closed");
  } else {
    setTimeout(function() {
      menuToggle = false;
    }, 500);
    menu.classList.toggle("menu--closed");
    menu.classList.remove("menu--open");
    menuItems.classList.toggle("menu__list--closed");
    menuItems.classList.remove("menu__list--open");
  }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
const menuItems = document.querySelector("ul");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Reference to html document
const html = document.querySelector("html");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", event => {
  event.stopPropagation();
  toggleMenu();
});

html.addEventListener("click", event => {
  let target = event.target.nodeName;
  if (menuToggle === false) {
    return;
  } else if (target === "LI") {
    return;
  } else {
    toggleMenu();
  }
});
