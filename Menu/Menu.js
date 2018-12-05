class MenuItem {
  constructor(menuitem){
    this.menuitem = menuitem;
    this.menuClick = document.querySelector('.menu-button');
    this.menuContent = document.querySelector('.menu');
    this.menuClick.addEventListener('click', () => this.toggleMenu());

  }
  // Methods
  toggleMenu(){
    console.log("The click worked!");
    this.menuContent.classList.toggle('menu--open');
  }
}
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll('.menu-button');
menuButton.forEach( menuitem => {
  return new MenuItem(menuitem);
});
// Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener('click', () =>  toggleMenu());