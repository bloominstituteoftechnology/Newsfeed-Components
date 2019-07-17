/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

let newCom = (a) => {
  // menu div
  let newItem = document.createElement('div');
  newItem.classList.add('menu');
  
  // content
  let list = document.createElement('ul');
  newItem.appendChild(list);
  a.forEach((text) => {
    let listItem = document.createElement('li');
    listItem.textContent = `${text}`;
    list.appendChild(listItem);
  });

  // add item and content to the DOM 
  let body = document.querySelector('body');
  body.appendChild(newItem);

  return newItem;
}

let menuBtn = document.querySelector('.menu-button');
menuBtn.addEventListener('click', () => {
  newCom(menuItems);
  let menu = document.querySelector('.menu');
  menu.classList.toggle('menu--open');
})

// Step 1: Write a function that will create a menu component as seen below:

// <div class="menu">
//   <ul>
//     {each menu item as a list item}
//   </ul>
// </div>

// Pass the function an array as it's only argument.

// Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
// Add those items to the <ul>

// Step 3: Using a DOM selector, select the menu button currently on the DOM.

// Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

// Step 5: return the menu component.

// Step 6: add the menu component to the DOM.