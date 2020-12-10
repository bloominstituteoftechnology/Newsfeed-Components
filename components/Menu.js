// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function menuMaker (arrayOfMenuItems){
  //creating the DOM elements
  let divMenu = document.createElement('div');
  divMenu.classList.add('menu');

  let unorderedListElement = document.createElement('ul');

  //iterating over the array to add list items //forEach - for each item in the array, make it into a list item and then add it onto the unordered list
  menuItems.forEach(listString => {
    const listItem = document.createElement('li');
    
    listItem.textContent = listString;
    unorderedListElement.appendChild(listItem);
  });

  //adding the elements to the DOM
  divMenu.appendChild(unorderedListElement);

  //adding the menu-button to the DOM
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', (e) => {
    divMenu.classList.toggle('menu--open');
  });

  return divMenu;
}


/* 
  [x]Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  [x]Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  [x]Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  [x]Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  [x]Step 5: Don't forget to return your div.menu.

  [x]Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
menuMaker(menuItems).appendChild(header);