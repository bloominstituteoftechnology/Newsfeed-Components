
// // Start Here: Create a reference to the ".menu" class


// // create a reference to the ".menu-button" class


const menuList = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-button');


// Using your menuButton reference, add a click handler that calls toggleMenu
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menuList.classList.toggle("menu--open");
  // console.log("got in");
}


menuBtn.addEventListener('click', toggleMenu); 


























