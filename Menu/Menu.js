


// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Toggle the "menu--open" class on your menu reference.
const toggleMenu = function (event){
  menu.classList.toggle('menu--open')
}

// Using your menuButton reference, add a click handler that calls toggleMenu
// REFACTORS (both work) 
// Approach 1
    menuButton.addEventListener('click',toggleMenu);

// Approach 2
    // menuButton.addEventListener('click',function(event){
    //   menu.classList.toggle('menu--open')
    // });

/*
EXPERIMENTAL
menuButton.addEventListener('click',function(){
  console.log('Console works'); // confirm menuButton click works
  alert('menuButton WORKS'); // confirm menuButton click works
//  this.toggleMenu(event);
})
*/