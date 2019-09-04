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

//step 1
function menuBuilder (array){
  const menu = document.createElement('div');
  menu.classList.add('menu');
  const ul = document.createElement('ul');
  menu.appendChild(ul);

  //step 2
  const anItem = document.createElement('li');
  anItem.textContent = a;
  const listItems = array.map(a => {
    return anItem;
  })

  listItems.forEach(listItem => {
    ul.appendChild(listItem);
  });
  
  //step 3
  const menuButton = document.querySelector('.menu-button')

  //step 4
  menuButton.addEventListener('click', e => {
    menu.classList.toggle('menu--open');
  })

  //step 5
  return menu;
}
const menuBuilder = menuBuilder(menuItems);

//step 6
document.querySelector('body').appendChild(menuBuilder)

