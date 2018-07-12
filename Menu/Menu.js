
// Main Menu
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.

  menu.classList.toggle('menu--open');
  TweenMax.from(menu, 2, {height:0});
  TweenMax.to(menu, 2, {height:1000});

  opacity.classList.toggle('opacity--open');
  TweenMax.from(menuButton, .5, {rotation:0});
  TweenMax.to(menuButton, .5, {rotation:360});
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);



// Opacity
opacity = document.querySelector('.opacity');
opacity.addEventListener('click', () => {
  opacity.classList.toggle('opacity--open');
  menu.classList.toggle('menu--open');
});



// Hamburger Menu
class Menu {
  constructor (menuItem) {
    this.element = menuItem;
    this.menuButton = this.element.querySelector('.menu-item__button');
    this.menuButton.style.color = 'white';
    this.menuButton.addEventListener('click', this.doSomething.bind(this));

  }

  doSomething (e) {
    let posX = e.offsetX;
    let posY = e.offsetY;
    let ranDom = Math.floor(Math.random() * (230 - 10)) + 10;

    switch (this.menuButton.textContent) {
      case 'Students':
        menu.style.background = `linear-gradient(rgb(${posX}, ${ranDom}, ${posY}), rgb(${ranDom}, ${posX}, ${ranDom}))`;
      break;
      case 'Faculty':
        menu.style.background = `linear-gradient(rgb(${posX}, ${ranDom}, ${posY}), rgb(${ranDom}, ${posX}, ${posY}))`;
      break;
      case `What's New`:
        menu.style.background = `linear-gradient(rgb(${posX}, ${posY}, ${ranDom}), rgb(${ranDom}, ${posX}, ${posY}))`;
      break;
      case `Tech Trends`:
        menu.style.background = `linear-gradient(rgb(${ranDom}, ${posX}, ${posY}), rgb(${ranDom}, ${posX}, ${posY}))`;
      break;
      case `Music`:
        menu.style.background = `linear-gradient(rgb(${ranDom}, ${ranDom}, ${ranDom}), rgb(${ranDom}, ${posX}, ${posY}))`;
      break;
      case `Log Out`:
        menu.style.background = `linear-gradient(rgb(${posX}, ${ranDom}, ${posY}), rgb(${ranDom}, ${posX}, ${posY}))`;
      break;
    }
  }
}

let menuItems = document.querySelectorAll('.menu-item');
menuItems = Array.from(menuItems).map(menuItem => new Menu(menuItem));