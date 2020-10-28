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
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.
*/
  function menuMaker(menuItems){
    //created elements
    const menu = document.createElement('div');
    const list = document.createElement('ul');
    const item1 = document.createElement('li');
    const item2 = document.createElement('li');
    const item3 = document.createElement('li');
    const item4 = document.createElement('li');
    const item5 = document.createElement('li');
    const item6 = document.createElement('li');

    //set structure
    menu.appendChild(list);
    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);
    list.appendChild(item4);
    list.appendChild(item5);
    list.appendChild(item6);

    //Gave clasification to appropriate elements
    menu.classList.add('menu')

    //Gave text content for list items
    item1.textContent = menuItems[0];
    item2.textContent = menuItems[1]
    item3.textContent = menuItems[2]
    item4.textContent = menuItems[3]
    item5.textContent = menuItems[4]
    item6.textContent = menuItems[5]


    return menu;

  }


  /*Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>
  */

  //Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').


  //Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).


  //Step 5: Don't forget to return your div.menu.


  //Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.

