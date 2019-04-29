
const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu 
    menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
console.log("menu", menu );
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
console.log("menuBtn", menuButton);
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', toggleMenu)
