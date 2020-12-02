// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

let other = [
  'Students',
  'Faculty',
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(array) {
  // Creating DOM elements 
  const menu = document.createElement('div');
  const unorderedList = document.createElement('ul');

  // Creating DOM Tree
  menu.appendChild(unorderedList);

  // Adding Class Names
  menu.classList.add('menu');

  // Step 2: Iterating Over Array To Create List Items, Adding them to <ul>, Creating more of the DOM Tree.
  array.forEach((items) => {
    const listItems = document.createElement('li');
    listItems.textContent = items;
    unorderedList.appendChild(listItems);
  });

  // Step 3: Selecting from DOM the element with the class of "menu-button"
  const menuButton = document.querySelector('.menu-button');

  // Step 4: Adding a Click Event Listener to the menu button. Adding Class 'menu--open' on toggle to div.menu.
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });

  // Step 5: Return div.menu
  return menu;

}

const header = document.querySelector(".header")
header.appendChild(menuMaker(menuItems));

// OR

// document.querySelector(".header").appendChild(menuMaker(menuItems));


