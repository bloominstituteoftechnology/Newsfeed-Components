
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open')

  //Depending on the class figure out whether or not to slide in/out
  if (menu.classList.contains('menu--open')){
    console.log('slide out')
    slideOut();
  } else {
    console.log('slide in')
    slideIn();
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click',function(){
  toggleMenu(menu);
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
