
const toggleMenu = () => {
  console.log(menu)
  menu.classList.toggle("menu--open")
}

const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener("click", toggleMenu);