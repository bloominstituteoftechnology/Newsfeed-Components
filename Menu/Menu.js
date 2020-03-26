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


// let menuToggle = (item) => {
//   article.classList.toggle('')
// }

function menuPanel(data) {

  const menu = document.createElement('div');
  const navList = document.createElement('ul');

  //try data.list_one
  menuItems.forEach((item) => {
    // console.log(menuItems);
    // const newMenu = menuPanel(item);
    // menu.appendChild(newMenu);
    let navListItem = document.createElement('li');
    // menuItems.textContent = item;
    // navList.append(menuItems);

    navListItem.textContent = item;
    navList.append(navListItem);

  });

  menu.classList.add('menu');

  menu.append(navList);
  navList.append(menuItems);
  // list_one.append(list_one);
  //try appending to list







  let menuToggle = document.querySelector('.menu-button');
  menuToggle.addEventListener('click', event => {
    menu.classList.toggle('menu--open');
  })

  return menu;
}







const menus = document.querySelector('.header');
menus.append(menuPanel(menuItems));
