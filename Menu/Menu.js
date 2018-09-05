
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
  
  if(Array.from(menu.classList).includes('menu--open')){
    menu.style.display = 'block';
    TweenMax.to('.menu', 1, {left: 0});
  }

  else{
    TweenMax.to('.menu', 1, {left: -350, onComplete:hideBlock});
  }
}

function hideBlock(){
  menu.style.display = 'none';
}


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);

