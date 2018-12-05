
const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence. 
  e.stopPropagation()
  if(menu.classList.contains('menu--open')){
    setTimeout(function(){
      menu.classList.toggle('menu--open');
    }, 150);
    TweenMax.fromTo(menu, .3, {x:0}, {x:-350});
  } else {
    menu.classList.toggle('menu--open');
    TweenMax.fromTo(menu, .3, {x:-350}, {x:0});
  }
     
}

const closeMenu = (e) => {
  if(menu.classList.contains('menu--open')) {
    toggleMenu(e)
  }
}

const openMenuClick = (e) => {
  e.stopPropagation();
}

// const myBody = document.querySelector('body');
// myBody.addEventListener('click', () => closeMenu());

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', (e) => toggleMenu(e));
window.addEventListener('click', (e) => closeMenu(e));
menu.addEventListener('click', (e) => openMenuClick(e));
