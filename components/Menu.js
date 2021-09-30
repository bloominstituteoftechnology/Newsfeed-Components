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

  The 'menuMaker' takes an array of menu items as its only argument. */

  function menuMaker(arr) {

    const menuDiv = document.createElement('div');
    const list = document.createElement('ul');  
    menuDiv.appendChild(list);  

/*
  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul> */

  let x = {};
  for (let i = 0; i < arr.length; i++) {
      x[i] = document.createElement('li');
      x[i].textContent = arr[i];
      list.appendChild(x[i]);
  }

  menuDiv.classList.add('menu');

/*
  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button'). */

  const menuSect = document.querySelector('.menu-button');  
  
  // menuSect.appendChild(menuDiv);   

/*
  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class). */
  
  menuSect.addEventListener('click', evt => {    
    menuDiv.classList.toggle('menu--open');
  })    

/* 
  Step 5: Don't forget to return your div.menu. */
  
  return menuDiv;
  }  

  const testMenu = menuMaker(menuItems);

  console.log('testMenu: ', testMenu);

/*
  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

const menuItem = document.querySelector('.header');

const menuElements = menuMaker(menuItems);

console.log('menuElements: ', menuElements);

menuItem.appendChild(menuElements);


// const headerDiv = document.querySelector('.header');
// // console.log(headerDiv)
// const menuEl = menuMaker(menuItems);
// //console.log(menuEl)
// headerDiv.appendChild(menuEl);