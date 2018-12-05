
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle("menu--open")
  
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", function(e) {
  toggleMenu();
  if (menu.classList.contains("menu--open")){
    TweenMax.to(menu, 0.5, {
      left:0,
      ease: Power0.easeNone})

  } else {
    TweenMax.to(menu, 0.5, {
      left:-350,
      ease: Power0.easeNone})
  }
})


// } else {
//   TweenMax.from(menu, 0.5, {
//     left:-350,
//     ease: Power0.easeNone}).reverse(0)
// }