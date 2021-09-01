// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function menuMaker(array){

  let menu = document.createElement('div');
  let ul = document.createElement('ul');

  array.forEach(link => {
    const domLink = document.createElement('li');
    domLink.textContent = link;
    ul.appendChild(domLink);
  });

  menu.appendChild(ul);
  
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', event => {
    menu.classList.toggle('menu--open');
  });

  return menu;
  
}

const menu = menuMaker(menuItems);
let header = document.querySelector('.header');
header.appendChild(menu);
