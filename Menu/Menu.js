
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  // event.currentTarget.classList.toggle('menu--open');
  if(menuClass.style.display === "none") {
    menuClass.style.display = "block";
  } else {
    menuClass.style.display = "none";
  }
}

// Start Here: Create a reference to the ".menu" class
let menuClass = document.querySelector(".menu");

// create a reference to the ".menu-button" class
let menuButtonClass = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
let menuButtonClick = menuButtonClass.addEventListener('click', toggleMenu);

// menuButton.addEventListener('click', toggleMenu);

/// Ryan Solution

// const toggleMenu = function(){
//   if(navMenu.style.display === 'none'){
//     navMenu.style.display = "block"; 
//   } else {
//     navMenu.style.display = 'none'; 
//    }
//  }

// let navMenu = document.querySelector(".menu");
// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector(".menu-button");
// // create a reference to the ".menu-button" class
// const menuButton = menu.addEventListener("click", toggleMenu);
// // Using your menuButton reference, add a click handler that calls toggleMenu
