
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open');
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', function(){
  TweenMax.to(".header h1", 2, {color: 'yellow',x:250, ease:Bounce.easeOut, yoyoEase:Power2.easeOut, yoyo:true, repeat:1, repeatDelay:0.1});
  toggleMenu();
});
