
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
//   this.menu.classList.toggle('menu--open');

//   console.log(`menu button clicked`);
// }

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
class Menu {
  constructor(menu, menuButton){
    this.menu = menu;
    this.menuButton = menuButton;
    var self = this;
    self.menuButton.addEventListener('click', () => self.toggleMenu()
    )}
  toggleMenu (){
    this.menu.classList.toggle('menu--open')
  }
}

new Menu(menu, menuButton);