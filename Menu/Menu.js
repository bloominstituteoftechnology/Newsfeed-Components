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
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/

const menuMaker = (dataArray) => {
  //Step 2 iterate and create <li> element for each item in the array

let listArray = dataArray.map( textContent => {
  let list = listCreator(textContent);
  return list;
})
// Callback Function
function listCreator(textContent){
 let listElement = document.createElement('li');
  listElement.textContent = textContent;
  return listElement;
}

//create div with menu class
// let divElement = document.createElement('div')



  //Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  let menuButton = document.querySelector('.menu-button');

  //Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  menuButton.addEventListener('click', () => {
  divElement.classList.toggle('menu--open');
  })

  return listArray;

} // end menuMaker



//create ul
let divElement = document.createElement('div')
let ulElement = document.createElement('ul');
let menuElement = document.querySelector('.menu-button')


// menuElement.append(divElement);
divElement.append(ulElement);




bodyElement = document.querySelector('body')

bodyElement.append(divElement)


divElement.classList.add('menu');


// Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
let newMenu = menuMaker(menuItems);


ulElement.append(newMenu[0], newMenu[1], newMenu[2], newMenu[3], newMenu[4], newMenu[5])

console.log(newMenu)