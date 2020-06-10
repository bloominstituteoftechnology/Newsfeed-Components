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
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, 
  select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. 
  When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/

// 


const menuHeader = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');

menuHeader.style.backgroundColor = 'grey';


function menuMaker() {


  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.style.backgroundColor = 'grey';
  menu.style.border = '1px solid grey';

  const listItems = document.createElement('ul');

  menu.appendChild(listItems);


  menuItems.forEach((list) => {
    const li = document.createElement('li');
    li.textContent = list;
    listItems.appendChild(li);
    li.style.cursor = 'pointer';
    li.addEventListener('click', () => {
      li.style.opacity = '30%';
      li.style.fontSize = '.8rem'
    });
    li.addEventListener('mouseleave', () => {
      li.style.opacity = '100%';
      li.style.fontSize = '1.8rem';
    });
  });

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  })

  return menu;
}

menuHeader.appendChild(menuMaker(menuItems));