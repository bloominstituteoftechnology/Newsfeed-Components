
const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence.
  // menu.classList.toggle('menu--open')
  if (menu.style.transform === '') {
    TweenMax.to(".menu", 1, {x:350})
  } else if (menu.style.transform === 'matrix(1, 0, 0, 1, 350, 0)') {  
    TweenMax.to(".menu", 1, {x:-350})
  } else {
    TweenMax.to(".menu", 1, {x:350})
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

// "matrix(1, 0, 0, 1, 350, 0);"