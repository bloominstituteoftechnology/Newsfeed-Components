
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
let onOff = false;
const toggleMenu = () => {
  if(onOff == false){
    onOff = true;
    menu.classList.add('menu--open');
    TweenMax.to('.menu', 1, {left:-43, opacity: 1 ,ease:Power4.easeOut});  
  }else if (onOff == true){
    onOff = false;
    TweenMax.to('.menu', 1, {left:-350, opacity: 0, ease:Power4.easeOut, onComplete: () => menu.classList.remove('menu--open')});
  }
  // Toggle the "menu--open" class on your menu refence.
}
menuButton.addEventListener('click',toggleMenu);

