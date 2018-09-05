
const toggleMenu = (event) => {
  // Toggle the "menu--open" class on your menu refence. 
/*   if (menu.classList.contains('menu--open')) {
    TweenMax.to(menu, .25, {left: 0, opacity: 0, onComplete: () => menu.classList.remove('menu--open')});
    console.log(menu);
   } else {
    TweenMax.to(menu, 0, {right: 250, opacity: 0.95, onComplete: () => menu.classList.add('menu--open')});
   } */
   event.target.parentNode.nextElementSibling.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

