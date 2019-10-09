/* This is the data we will be using, study it but don't change anything, yet. */



/* 
  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
// Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
// Add those items to the <ul>

// Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

// Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

// Step 5: return the menu component.

// Step 6: add the menu component to the DOM.
*/

window.addEventListener('load', () =>{


let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


function menuCreator(array){
  const menuDiv = document.createElement('div');
  const menuUlItem = document.createElement('ul');

  const navButton = document.querySelector('.menu-button');

  menuDiv.appendChild(menuUlItem);

  array.forEach(items => {
    const menuLiItems = document.createElement('li');
    menuLiItems.textContent = items;
    menuUlItem.appendChild(menuLiItems); 
  });
   menuDiv.classList.add('menu');

   
   navButton.addEventListener('click', event =>{
      menuDiv.classList.toggle('menu--open');
   })
  return menuDiv;
}

const navMenu = document.querySelector('.header');
navMenu.append(menuCreator(menuItems));

})
