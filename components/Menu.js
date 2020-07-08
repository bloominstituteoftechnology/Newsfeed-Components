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
*/

  //The 'menuMaker' takes an array as its only argument.
  const menuBtn = document.querySelector('.menu-button')
  const headerMenu = document.querySelector('.header')
  function menuMaker(array) {
    const menuDiv = document.createElement('div')
    const ulEl = document.createElement('ul')
//appending elements to html
    menuDiv.appendChild(ulEl)

    //adding class names to elements
    menuDiv.className = 'menu'

    //Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
    //Add those items to the <ul>
    array.forEach(item => {
      let newItems = document.createElement('li')
      newItems.textContent = item
      ulEl.appendChild(newItems)
    })
    //Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('menu--open')
    
    })
    //Step 5: return your div with a 'menu' class.
    return menuDiv
  }
  headerMenu.appendChild(menuMaker(menuItems))
  console.log('hi menu')
  
  
  
  //Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  



  //Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
  