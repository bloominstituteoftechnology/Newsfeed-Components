
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 

  menuClass.classList.toggle('menu--open');

  // Ryan solution
  // if(menuClass.style.display === "none") {
  //   menuClass.style.display = "block";
  // } else {
  //   menuClass.style.display = "none";
  // }

}

// Start Here: Create a reference to the ".menu" class
let menuClass = document.querySelector(".menu");

// create a reference to the ".menu-button" class
let menuButtonClass = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
let menuButtonClick = menuButtonClass.addEventListener('click', toggleMenu);

