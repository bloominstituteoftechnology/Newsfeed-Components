let visible = false
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  if(visible === false)  {
      TweenLite.to(menu, .2, {opacity: 1})
      visible = true;
      console.log(visible)
  } else {
      TweenLite.to(menu, .2, {opacity: 0})
      visible = false;
  }
  console.log("clicked")
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
menu.style.display = "block";
menu.style.opacity = 0;
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu)
