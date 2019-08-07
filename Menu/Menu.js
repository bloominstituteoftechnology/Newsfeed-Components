/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


function createMenu (items) {
  const menu = document.createElement('div');
  const list = document.createElement('ul');
  items.forEach( item => {
    listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(item));
    list.appendChild(listItem);
  });
  menu.appendChild(list);
  menu.classList.add('menu');
  menu.classList.add('menu--closed');
  return menu
}


window.addEventListener('load', event => {
  const menuBtn = document.getElementsByClassName('menu-button')[0]
  const menu = createMenu(menuItems);
  document.getElementsByTagName('body')[0].prepend(menu);
  menuBtn.addEventListener('click', event => {
    menu.classList.toggle('menu--open');
    menu.classList.toggle('menu--closed');
  })
})

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
