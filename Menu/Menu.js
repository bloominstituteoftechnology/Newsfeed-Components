
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  articleBody.classList.toggle('squeeze');
  let menuBounce = menu.querySelectorAll('li');
    TweenMax.staggerTo(menuBounce, 1, {
      x: 20,
      ease: Circ.easeOut,
    }, .1)

 

  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
const articleBody = document.querySelector('.articles');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);
