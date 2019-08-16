/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Job Board',
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

// Step 1: Write a function that will create a menu component structure as below:
// <div class="menu">
//   <ul>
//     {each menu item as a list item}
//    </ul>
// </div>
// You will pass the function the array 'menuItems' as the sole argument.
//  === Steps 2 - 4 will occur inside of the function===
//   Step 2: Iterate over the array creating a list item < li > element for each item in the array.
//  Add those items to the < ul >
//   Step 3: Using a DOM selector, select the container with class '.menu-button' currently on the DOM.
//    Step 4: add a click handler to the menu button, when clicked it should toggle
// the class 'menu--open' on the div container(menu class) you created earlier.
//   Step 5: return the DOM menu you created with your function.
// Step 6: Call your function and add it to the menu component to the wrapping container(Hint: header class)


function menuCreator(array){
  const newDiv = document.createElement('div');
  newDiv.classList.add('menu');
  
  const listItems = document.createElement('ul')
  newDiv.appendChild(listItems)
  
  array.forEach((item) => {
    const items = document.createElement('li')
    items.textContent = item
    listItems.appendChild(items)
// Items is becoming the textContent looping over the li, appending to ul which appending to the div.
  })

  return newDiv;
}

const header = document.querySelector('.header');
const menu = (menuCreator(menuItems))
header.appendChild(menu);
// menuCreator() is resolving or becoming to the new div and appending the div to the header.

let menuBtn = document.querySelector('.menu-button');
menuBtn.addEventListener('click', () => {
  event.preventDefault();
  menu.classList.toggle('menu--open')

});