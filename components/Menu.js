// This is the data we will be using, study it but don't change anything, yet.

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
      {each menu item as an <li>}
    </ul>
  </div>j

  The 'menuMaker' takes an array of menu items as its only argument.
*/

function menuMaker(arr){
  
  //create menu elements
  const menu = document.createElement('div');
  const unList = document.createElement('ul');

  //add proper class names to elements
  menu.classList.add('menu');
  
  //append unordered list to menu
  menu.appendChild(unList);

  //append list items to unordered list when given array of menu items

  menuItems.forEach(elem => {
    //create list item
    const listItem = document.createElement('li');

    //add text content to list item
    listItem.textContent = elem;
  
    //append list item to the unordered list
    unList.appendChild(listItem);
  })

  //selecting dom element 'menu button'
  const hamburger = document.querySelector('.menu-button');

  hamburger.addEventListener('click', evt => {
    menu.classList.toggle('menu--open');
  })

  return menu;
}

//selecting dom header
const header = document.querySelector('.header');

//creating div with all menu items
const realMenu = menuMaker(menuItems);

//appending div menu items to header
header.appendChild(realMenu);









/*
  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
