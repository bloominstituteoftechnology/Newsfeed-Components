// This is the data we will be using, study it but don't change anything, yet.

import menuItems from './MenuItems';
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
const header = document.createElement('header');
const navbar = document.createElement('nav');
const menu_ul = document.createElement('ul');
const btn = document.querySelector('.menu-button');
const div_header = document.querySelector('.header');
const body = document.querySelector('body');
const menu_div = document.createElement('div');

function menuMaker(array) {
  array.forEach(item => {
    const menu_li = document.createElement('li');
    menu_li.textContent = item;
    menu_ul.appendChild(menu_li);
 //   console.log(menu_li);
  });
  body.prepend(header);
  header.appendChild(div_header);
  header.appendChild(menu_div);
  menu_div.appendChild(navbar);
  navbar.appendChild(menu_ul);
  menu_div.classList.add('menu');
}
menuMaker(menuItems);

btn.addEventListener('click', (event) => {
  console.log("button clicked!")
  menu_div.classList.toggle('menu--open');
})
