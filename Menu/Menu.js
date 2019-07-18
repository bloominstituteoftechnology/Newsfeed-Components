/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

//select the mnu

const menuOption = document.querySelector('.menu-button');


// for each menu item

menuItems.forEach(x => {
  menuOption.appendChild(createOption(x.menuItems3))
});


function createOption(menuItems) {

 // Define new elements

 xMenu = document.createElement('div');
 xList = document.createElement('ul');
 xButton = document.createElement('button');


 // Set up structure of elements

 xMenu.appendChild(xList);


 // Set class names

 xMenu.classList.add('menu');
 xList.classList.add('ul');
 xButton.classList.add('menu-button');


 // Set text content

 xMenu.textContent = menuItems;


 // Events

xButton.addEventListener('click', e => {
  xMenu.classList.toggle('menu--open');
});


return xMenu;
  
}



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
