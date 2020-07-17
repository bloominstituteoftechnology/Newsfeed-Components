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

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(menuItems){

  //Creates elements to set the DOM
  let menuContainer = document.createElement('div');
  let menuList = document.createElement('ul');
  
  //Nests menu list into the div container and adds a class to the div container.
  menuContainer.appendChild(menuList);
  menuContainer.classList.add('menu');

  //Iterates through the menu list and sets each value as a list element and is nested into the unordered list element.
  menuItems.forEach(element => {
    let items = document.createElement('li');

    items.textContent = element;

    menuList.appendChild(items);
  });

  //Sets an event listen that toggle opens the menu list when clicked.
  let menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', () => {
    menuContainer.classList.toggle('menu--open');
  });

  return menuContainer;
}

//Nests the menu into the header container.
let header = document.querySelector('.header');

header.appendChild(menuMaker(menuItems));