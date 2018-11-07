
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
    document.querySelector(".menu").toggle(".menu--open");
}

// Start Here: Create a reference to the ".menu" class
//const menu;
const menu =document.querySelector(".menu");
// create a reference to the ".menu-button" class

//const menuButton;
const menuButton=document.querySelector(".menu-button");
    //menuButton.addEventListener().click(toggleMenu);
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener("click",toggleMenu);



//////const footerElement = document.querySelector('footer');
// // mouseenter event
//   footerElement.addEventListener('mouseover', (event) => {
//     event.target.classList.toggle('background-color');
//     console.log(footerElement)
//   })