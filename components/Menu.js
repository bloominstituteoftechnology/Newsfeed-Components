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
  </div>
  The 'menuMaker' takes an array of menu items as its only argument.
  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>
  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
  Step 5: Don't forget to return your div.menu.
  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menu(menuItems){ //created function menu and elements

  const menuDiv = document.createElement('div');
  const items = document.createElement('ul');

  menuDiv.classList.add('menu'); // adding 'menu' by using classlist.add (adds one more more class names to an element)

  menuDiv.appendChild(items); // appending list  to menuDiv

  menuItems.forEach(list => { // for each iteration of menuItems, we are listing
    let li = document.createElement('li'); // creating variable li equal to a new element li in the document
    li.textContent = list; // making the text in the li equal the list
    items.appendChild(li);
  });

  const menuButton = document.querySelector('.menu-button');// selecting the menu button to edit 

  menuButton.addEventListener('click', event => { // adding click eventlistener to menu button to toggle the menu open
    debugger
    menuDiv.classList.toggle('menu--open');
  });

  return menuDiv;
}
console.log(menu(menuItems));
const header = document.querySelector('.header'); // selecting the header
header.appendChild(menu(menuItems)); // adding the returned menu to the header 
