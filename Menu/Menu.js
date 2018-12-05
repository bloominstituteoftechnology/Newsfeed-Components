const toggleMenu = event => {
  // Toggle the "menu--open" class on your menu refence.
  console.log("clicked on menu");

  // stopping propagation to document so menu bar can open when clicked on menu
  event.stopPropagation();
  menu.classList.toggle("menu--open");
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

//////// For Stretch Task
// Add event listener on document for allowing menu bar to close
document.addEventListener("click", event => {
  menu.classList.remove("menu--open");
  console.log("Document is clicked");
});

menu.addEventListener("click", event => {
  // stopping propagation to document so that menu doesnt close when user clicks on it
  event.stopPropagation();
  console.log("menu list clicked");
});
