
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle("menu--open");
}
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);

window.addEventListener("click", (e) => {
  if(menu.classList.contains("menu--open") && !(e.target.classList.contains("menu-button"))){
    if(!(e.target.classList.contains("menu--open")) && !(e.target.parentElement.parentElement.classList.contains("menu--open"))){

      console.log(e);
      menu.classList.toggle("menu--open");
    }

  }
 
    // e.target.menu.classList.toggle("menu--open");
    // console.log(e.target.parentElement.parentElement);
    
    // console.log(e.target.classList.contains("menu") || e.target.parentElement.parentElement.classList.contains("menu"));
    
  })
  // console.log(menu.classList.contains("menu--open"));