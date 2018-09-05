
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  this.Menu = document.querySelector('.menu');
  if (this.Menu.style.display === "none") {
    this.Menu.style.display = "block";
} else {
  this.Menu.style.display = "none";
}
}

// Start Here: Create a reference to the ".menu" class

class Menu {
  constructor (menu){
    this.item = menu;
    this.item.addEventListerner('mouseover', () => { this.menuFync()});
  }
}

const menu= document.querySelector('.menu');
 Array.from(menu).map( menu => new Menu (menu));





// create a reference to the ".menu-button" class
//const menuButton;
// Using your menuButton reference, add a click handler that calls toggleMenu
class MenuButton {
  constructor(btn){
    this.item = btn;
    this.item.addEventListener('click', () => {toggleMenu ()} ); 
  }
}
const menuBtn = document.querySelectorAll('.menu-button')
Array.from(menuBtn).map( btn => new MenuButton (btn));

