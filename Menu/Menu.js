/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
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

function createMenu(array) {
  // list items
  const menu = document.addElement("div");
  const menuList = document.addElement("ul");
  const menuItemOne = document.addElement("li");
  const menuItemTwo = document.addElement("li");
  const menuItemThree = document.addElement("li");
  const menuItemFour = document.addElement("li");
  const menuItemFive = document.addElement("li");
  const menuItemSix = document.addElement("li");
  // const menubtn = document.addElement("button");

  // create structure
  menu.appendChild("menuList");
  menu.appendChild("menuItemOne");
  menu.appendChild("menuItemTwo");
  menu.appendChild("menuItemThree");
  menu.appendChild("menuItemFour");
  menu.appendChild("menuItemFive");
  menu.appendChild("menuItemSix");
  // menu.appendChild("menubtn");

  // set content
  menuList.textContent = "Menu";
  menuItemOne.textContent = menuItems[0];
  menuItemTwo.textContent = menuItems[1];
  menuItemThree.textContent = menuItems[2];
  menuItemFour.textContent = menuItems[3];
  menuItemFive.textContent = menuItems[4];
  menuItemSix.textContent = menuItems[5];
  // menubtn.textContent = "Click Me!";

  // apply styles
  menu.classList.add("menu");
  // menubtn.classList.add("menu-item");

  // add event handlers
  const menuBtn = document.querySelector(".menu-button");
  menuBtn.addEventListener("click", e => {
    menu.classList.toggle("menu--open");
    console.log("clicked");
  });

  return menu;
}

const showMenu = document.querySelector(".menu");
menuItems.forEach(data => {
  showMenu.appendChild(createMenu(data));
});
