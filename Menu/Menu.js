
const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence.
  if(!menu.classList.contains('menu--open')){ 
    menu.classList.add('menu--open');
    TweenMax.fromTo(menu, 1, {
      left: -350,
      display: 'none'
    }, {
      left: 0,
      display: 'block'
    });
    e.stopPropagation();
  }
}

const closeMenu = () => {
  if(menu.classList.contains('menu--open')){
    TweenMax.fromTo(menu, 1, {
      left: 0,
      display: 'block'
    }, {
      left: -350,
      display: 'none'
    });
    menu.classList.remove('menu--open');
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', function(e){
  toggleMenu(e);
});

window.addEventListener('click', function(){
  closeMenu();
});