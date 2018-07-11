
const toggleMenu = document.querySelector(".menu-button");
  // Toggle the "menu--open" class on your menu refence. 
  toggleMenu.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
  })

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll(".menu li");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.forEach(el => el.addEventListener("click", (e) => {
  console.log("we outchea");
  menu.classList.toggle("menu--open");
}
));