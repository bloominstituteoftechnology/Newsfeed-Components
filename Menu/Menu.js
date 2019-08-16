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

function menuComponent(array) {
  const menuDiv = document.createElement('div');
  const ulTag = document.createElement('ul');
  const menuButton = document.querySelector('.menu-button');

// A function that will take an array as a parameter and create li elements and append them to the ul element
  function liCreater(array){
    array.forEach(menuItem => {
      const newLi = document.createElement('li');
      newLi.textContent = menuItem
      ulTag.appendChild(newLi);
      }
    )
  }

  // liCreater function is invoked
  liCreater(array)

  // Appends the ul element to the div menu element
  menuDiv.appendChild(ulTag)

  // a 'menu' class is added to menu div
  menuDiv.classList.add('menu');

  // an event listener is added to toggle the menu class
  menuButton.addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open');
    }
  )
  return menuDiv
}

let menu = menuComponent(menuItems);

headerDiv = document.querySelector('.header')
headerDiv.prepend(menu);
