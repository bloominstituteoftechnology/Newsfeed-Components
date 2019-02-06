let menuActive = false;

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  if(!menuActive){
    menu.classList.toggle('menu--open');
    TweenMax.to(".menu", .5, {
      left:0,
    })
    menuActive = true;
  } else if(menuActive){
    TweenMax.to(".menu", .2, {
      left:-350,
    })
    menuActive = false;
    setTimeout(()=>{
      menu.classList.toggle('menu--open');
    }, 200)
  }
}


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => toggleMenu())