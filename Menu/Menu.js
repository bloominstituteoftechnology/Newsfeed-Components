
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle("menu--open");
  console.log('hello out there');
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
 menuButton.addEventListener("click", toggleMenu);

 TweenLite.to(document.querySelector(".header"), 1, {width:"700px", height:"50px"});