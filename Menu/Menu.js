
let open = false;
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  if (open === false) {
    menu.classList.add("menu--open");
    TweenMax.from(menu, 1, {x:-400});
    TweenMax.to(menu, 1, {x:0});
    open = true;
  } else {
    TweenMax.from(menu, 1, {x:0});
    TweenMax.to(menu, 1, {x:-400});
    open = false;
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", () => {
  // event.stopPropagation();
  toggleMenu;
});

let HTMLBody = document.querySelector("body");
HTMLBody.addEventListener("click", toggleMenu, false);

menu.addEventListener("click", event => event.stopPropagation(), true);