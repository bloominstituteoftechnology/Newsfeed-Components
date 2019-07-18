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



  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.

  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/
const menuHeader = document.querySelector(".header");

const menuButton = document.querySelector(".menu-button");

function createMenu(array) {
  const menu = document.createElement("div");
  const list = document.createElement("ul");
  const l1 = document.createElement("li");
  const l2 = document.createElement("li");
  const l3 = document.createElement("li");
  const l4 = document.createElement("li");
  const l5 = document.createElement("li");
  const l6 = document.createElement("li");

  menu.appendChild(list);
  list.appendChild(l1);
  list.appendChild(l2);
  list.appendChild(l3);
  list.appendChild(l4);
  list.appendChild(l5);
  list.appendChild(l6);

  menu.classList.add('menu');

  l1.textContent = array[0];
  l2.textContent = array[1];
  l3.textContent = array[2];
  l4.textContent = array[3];
  l5.textContent = array[4];
  l6.textContent = array[5];

  menuHeader.appendChild(menu);

  return menu;

}
createMenu(menuItems);

const menu = document.querySelector('.menu');

menuButton.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
})


