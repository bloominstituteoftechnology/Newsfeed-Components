


const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
}




// Start Here: Create a reference to the ".menu" class
class MenuOpen{
  constructor(menuList){
    this.menuList = menuList;
    this.menuItems = this.menuList.querySelector('.menu')
  }
}
this.menuItems.addEventListener('click', this.toggleMenuOpen.bind(this));
// const menu = doc

// toggleMenu() {
//   console.log('is this working?');
//   this.menuItems.classList>toggleMenu('toggle-on');
// }



// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')
// Using your menuButton reference, add a click handler that calls toggleMenu
