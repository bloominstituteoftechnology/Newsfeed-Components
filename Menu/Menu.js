/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
// const menu = document.createElement("div");
// menu.appendChild(null);

const createMenu = (items) => {
  //create element div
  const menu = document.createElement("div");

  //add menu class to div
  menu.classList.add('menu')

  //create element ul
  const unOrdered = document.createElement("ul");

  //append ul to div
  menu.appendChild(unOrdered);

  //loop over items and for each element append child a created li
  items.forEach((item)=>{
    //create the element of the item
    const eachItem = document.createElement("li");
    //set text content
    eachItem.textContent = item;
    //append the element to ul
    unOrdered.appendChild(eachItem);
  })

  const button = document.querySelector(".menu-button");

  button.addEventListener("click",()=>{
    menu.classList.toggle("menu--open");
  })

  return menu;
}

const bodyElement = document.querySelector(".header");
bodyElement.appendChild(createMenu(menuItems));

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
