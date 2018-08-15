
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');    
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu




const wholeBody = document.querySelector('.articles');
const articleBoxes = document.querySelectorAll('.article');

menuButton.addEventListener('drag', () => {  
  menuAnimationTwo();   
});

menuButton.addEventListener('click', () => {
  toggleMenu();
  menuAnimation();
});

wholeBody.addEventListener('click', () => {  
  toggleMenu();
  TweenMax.to(menuButton, 1, {left:80});
});









const menuAnimation = () => {
  TweenMax.to(menuButton, 1, {left:1300});
}

const menuAnimationTwo = () => {
  TweenMax.to(menuButton, 1, {left:80});
}

TweenMax.to(menuButton, 1, {left: 40});
TweenMax.to(articleBoxes, 1, {delay:0.2, left: 20});

