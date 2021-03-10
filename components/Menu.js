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

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(array) {
  //instantiate elements and add classlist 
  const menueD = document.createElement('div')
  menueD.classList.add('menu')
  //creating the unordered list element and attach it to the container menueD
  const ulList = document.createElement('ul')
  menueD.appendChild(ulList)
  //feeding the array through the function to make them list items
  array.forEach(item => {
    const liItem = document.createElement('li')
    liItem.textContent = item
    ulList.appendChild(liItem)
  })
  //giving the menu a click event listener to open and close
  const menuBtn = document.querySelector('.menu-button')
  menuBtn.addEventListener('click', () => {
    menueD.classList.toggle('menu--open')
  })
  //hehehe I am not forgetting again hehheheheh
  return menueD
}
const header = document.querySelector('.header')
header.appendChild(menuMaker(menuItems))
//side note: I can still do document.querySelector('.header').appendChild(menuMaker(menuItems))