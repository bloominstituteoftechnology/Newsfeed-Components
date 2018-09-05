
let navMenu = document.querySelector(".menu"); 


const toggleMenu = function(){
   if(navMenu.style.display === 'none'){
     navMenu.style.display = "block"; 
   } else {
     navMenu.style.display = 'none'; 
    }
  }


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu-button");
// create a reference to the ".menu-button" class
const menuButton = menu.addEventListener("click", toggleMenu);
// Using your menuButton reference, add a click handler that calls toggleMenu
