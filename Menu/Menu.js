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
//     Step 4: add a click handler to the menu button, when clicked it should toggle
// the class 'menu--open' on the div container(menu class) you created earlier.
//   Step 5: return the DOM menu you created with your function.
// Step 6: Call your function and add it to the menu component to the wrapping container(Hint: header class)


function menuCreator(array){
  let menuBtn = document.querySelector('.menu-button');
  let newDiv = document.createElement('div');

  newDiv.classList.add('menu');

  let listItems = document.createElement('ul')
  newDiv.appendChild(listItems)

  array.forEach((item) => {
    let items = document.createElement('li')
    items.textContent = item
    listItems.appendChild(items)

 })

  menuBtn.addEventListener('click', () => {
    event.preventDefault();
    newDiv.classList.toggle('menu--open')
    
  });

  return newDiv;
}

let header = document.querySelector('.header');
header.appendChild(menuCreator(menuItems));
