
function reader() {

let menu = document.querySelector(".menu");

//menu.style.display = "none";

function toggleMenu() {
//const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle("menu--open");  
 
 }

// Start Here: Create a reference to the ".menu" class
//const menu = document.querySelector(".menu");
//class Menu {
//  constructor(menu) {
//    this.item = menu;

//  }
//}

//console.log(menu);

//const menu;
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");





// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click", toggleMenu);




}

reader();
