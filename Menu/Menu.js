
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
}
const togglePage = () => {
  page.classList.toggle('change');
  // page.classList.toggle('.move-left')
  // console.log(page)
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
const page = document.querySelector('.container');

menuButton.addEventListener('click', () => {
  toggleMenu();
})

page.addEventListener('click', () => {
  togglePage();
  // page.style.marginLeft = "250px";
})

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }