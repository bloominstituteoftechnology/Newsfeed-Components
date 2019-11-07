/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// function menuCreator(info) {
//   const menuI = document.createElement('div');
//   const list = document.createElement('ul');
//   const li1 = document.createElement('li');
//   const li2 = document.createElement('li');
//   const li3 = document.createElement('li');
//   const li4 = document.createElement('li');
//   const li5 = document.createElement('li');
//   const li6 = document.createElement('li');

//   menuI.append(list);
//   list.append(li1);
//   list.append(li2);
//   list.append(li3);
//   list.append(li4);
//   list.append(li5);
//   list.append(li6);

//   list.textContent = info;
//   li1.textContent = info;
//   li2.textContent = info;
//   li3.textContent = info;
//   li4.textContent = info;
//   li5.textContent = info;
//   li6.textContent = info;

//   menuI.classList.add('.menu');
//   list.classList.add('.ul');

//   menuI.addEventListener('click', e => menuI.classList.toggle('menu-open'));
//   return menuI;
// }
// const header = document.querySelector('.header');
// const newMenu = document.querySelector('.menu-button');

// menuItems.forEach(element => {
//   newMenu.append(menuCreator(element));
// });

function creatMenu() {
  // creat elements
  const menuList = document.createElement('div');
  const ul = document.createElement('ul');

  // creat structure
  menuList.appendChild(ul);
  //set content
  menuItems.forEach(menuuu => {
    const li = document.createElement('li');
    li.textContent = menuuu;
    ul.appendChild(li);
  });
  // apply styles
  menuList.classList.add('menu');
  // add listner
  menu.addEventListener('click', event =>
    menuList.classList.toggle('menu--open')
  );
  return menuList;
}
const header = document.querySelector('.header');
const menu = document.querySelector('.menu-button');
header.appendChild(creatMenu());
