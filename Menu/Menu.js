
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle("menu--open");
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
const article = document.querySelectorAll('.article');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
const slideMenu = () => {
  if (menu.style.left === '-350px') {
    TweenLite.to(menu, 1, {left:"0"}); 
    TweenLite.to(article, 1, {left:"350px"}); 
  }
  else {
    TweenLite.to(menu, 1, {left:"-350px"});
    TweenLite.to(article, 1, {left:"0"}); 
  }
}

menuButton.addEventListener('click', slideMenu);