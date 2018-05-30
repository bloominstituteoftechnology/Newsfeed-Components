
const toggleMenu = (menuBtn, menuList) => {
  menuBtn.addEventListener("click", function() {
    menuList.classList.toggle('menu--open');
  });
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
let menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

toggleMenu(menuButton, menu);