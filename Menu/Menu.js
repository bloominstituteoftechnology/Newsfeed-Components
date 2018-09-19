
const toggleMenu = (event) => {
  // Toggle the "menu--open" class on your menu refence.
  if (event.style.display === "none") {
    event.style.display = "block";
  } else {
    event.style.display = "none"
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that 
//calls toggleMenu
menuButton.addEventListener('click', () => {
  return toggleMenu(menu);
});


