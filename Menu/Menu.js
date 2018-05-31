
const toggleMenu = (e) => {
  console.log('entering Toggle Menu Function')
  console.log(e.target)

  //if it has menu-items, it means menu-items was open so don't do anything
  if (e.target.classList.contains('menu-items')){
  
    // if it has the menu-button...
  } else if (e.target.classList.contains('menu-button')) {
    
    //Always toggle
    menu.classList.toggle('menu--open')
    //Depending on the class figure out whether or not to slide in/out
    if (menu.classList.contains('menu--open')){
      console.log('slide out')
      slideOut();
    } else {
      console.log('slide in')
      slideIn();
    }      
  } else {
    if (menu.classList.contains('menu--open')){
      //Always toggle
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
  }
}
  // Toggle the "menu--open" class on your menu refence. 

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')

// Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener('click',function(e){
//   toggleMenu(e);
// })


//Grab the entire DOM to make the menu work on all parts of the DOM
let doc = document.documentElement
doc.addEventListener('click',function(e) {
  toggleMenu(e);
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

