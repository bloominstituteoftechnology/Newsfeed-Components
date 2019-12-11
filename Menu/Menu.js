/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


// Step 1: Write a function that will create a menu component as seen below:

// <div class="menu">
//   <ul>
//     {each menu item as a list item}
//   </ul>
// </div>

// The function takes an array as its only argument.

////////////////Get .menu-button

const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('header');

////////////////Function to Create Menu Component
function createMenuComp (menuItems){
  ////////////////Create Elements
  const menuCompMenu = document.createElement('div');
  const menuCompList = document.createElement('ul');

  ////////////////Append/Nest Elements
  menuCompMenu.appendChild(menuCompList);

  ////////////////Add Classes to Elements
  menuCompMenu.classList.add('menu');


// Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
// Add those items to the <ul>

  menuItems.forEach((index) => {
    const menuCompListItems = index.createElement('li');
    menuCompList.appendChild(menuCompListItems);
    menuCompListItems.classList.add('menu-list-item');
    menuCompListItems.textContent = index;
  });

// Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  const menuButton = document.querySelector('.menu-button');

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  menuButton.addEventListener('click', (event) => {
    menuCompMenu.classList.toggle('menu--open');
  });

  // Step 5: return the menu component.

return menuCompMenu;
};

// Step 6: add the menu component to the DOM.
const menuButton = document.querySelector('.menu-button');

// menuItems.forEach((index) => {
//   menuButton.appendChild(createMenuComp(index));
// });
