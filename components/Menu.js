// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// /* 
//   Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

//   <div class="menu">
//     <ul>
//       {each menu item as an <li>}
//     </ul>
//   </div>
// Step 1
const menuMaker = function(array) {
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');
  const uList = document.createElement('ul');
  array.forEach(item => {
    let list = document.createElement('li');
    list.textContent = item;
    uList.appendChild(list);
  });
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open')
  });
  menuDiv.appendChild(uList);
  return menuDiv;
}

const header = document.querySelector('.header');
const newMenu = menuMaker(menuItems);
header.appendChild(newMenu);