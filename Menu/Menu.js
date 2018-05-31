
// Determine which mouse clicks are happening
// Only `e.target.menu-button` can open
// Everything can close except `e.taget.menu-items`
const mouseClickDisriminator = (e) => {

  //if it has menu-items, it means menu-items was open so don't do anything
  if (e.target.classList.contains('menu-items')){
  
    // if it has the menu-button...
  } else if (e.target.classList.contains('menu-button')) {

    toggleMenu();
  
  } else if (menu.classList.contains('menu--open')){

    toggleMenu()
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')

//Grab the entire DOM to make the menu work on all parts of the DOM
let doc = document.documentElement
doc.addEventListener('click',function(e) {
  mouseClickDisriminator(e);
})

//Basic Sliding Functionality
function slideOut(){
    TweenMax.to(".menu", 1, {
    left:0
  })
}
  
function slideIn(){
    TweenMax.to(".menu", 1, {
    left:-350
  })
}

//Toggle the Menu
function toggleMenu(){
  menu.classList.toggle('menu--open')
  
  if (menu.classList.contains('menu--open')){
    slideOut();
  } else {
    slideIn();
  }      
}
