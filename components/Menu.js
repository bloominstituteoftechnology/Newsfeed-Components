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
  </div>*/
  
  /*The 'menuMaker' takes an array of menu items as its only argument.*/

  // grab the parent to append to from the dom
  const menuButton = document.querySelector('.menu-button');

  function menuMaker(menuObj) {

    // create the elements
    const menu = document.createElement('div');
    const menuItemList = document.createElement('ul');
    const menuItem = document.createElement('li');

    // append them
    menu.appendChild(menuItemList);
    menuItemList.appendChild(menuItem);

    // add classes and ids
    menu.classList.add('menu');

    // set the text content
    menuItem.textContent = menuObj;

    // add the event listener
    menuButton.addEventListener('click', () => {
      menu.classList.toggle('menu');
    });
   
    return menu;
  }
  // END OF THE FUNCTION

  menuItems.forEach((elem) => {
    const newElem = menuMaker(elem);
    document.querySelector('.header').appendChild(newElem);
  })
  
  /*Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>*/

  /*Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').*/

  /*Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).*/

  /*Step 5: Don't forget to return your div.menu.*/

  /*Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

/*
 // toggle that sucker
    menu.addEventListener('click', () => {
      menu.classList.toggle('menu-button');
    })

const menuButton = document.querySelector('.menu-button');

  const menuElem = menuItems.map(data => {
    return menuMaker(data);
  })

  menuElem.forEach(elem => {
    menuButton.appendChild(elem);
  })
  */