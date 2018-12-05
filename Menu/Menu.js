
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  
    // console.log('Menu button was clicked');
    // this.menu.toggle('menu--open');
  

      

// Start Here: Create a reference to the ".menu" class
//const menu = document.querySelector('.menu');
  this.menu = document.querySelector('.menu');
  console.log(menu);

// create a reference to the ".menu-button" class
this.menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
//menuButton.addEventListener('click', )
this.menuButton.addEventListener('click', () => this.toggleMenu());

console.log('Menu button was clicked');
    this.menu.toggle('menu--open');


}