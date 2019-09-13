/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];




let header = document.querySelector('.header');
let body = document.querySelector('body');
let menuButton = document.querySelector('.menu-button');

function menuCreator(array) {
  let div = document.createElement('div');
  let ul = document.createElement('ul');
  header.appendChild(ul);
  div.classList.add('menu');

  array.forEach((item) => {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  })
  div.appendChild(ul);

 
  
  menuButton.addEventListener('click', (event) => {
    let menu = document.querySelector('.menu');
    menu.classList.toggle('menu-open');
    newMenuCreator.classList.toggle('menu-open');
  })

  return div;
}

window.addEventListener('load', () => {
const menu = document.querySelector('.header');
menu.appendChild(menuCreator(menuItems))
})
// menuButton.appendChild(menuCreator(menuItems));
// header.prepend(menuCreator(menuItems));
// let headerDiv = document.querySelector('.header');





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