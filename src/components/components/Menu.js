// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const menuDiv = document.querySelector('div.header')


const menuMaker = (obj) => {
  
  const panel = document.createElement('div')
  const listContainer = document.createElement('ul')
  const listitem1 = document.createElement('li')
  const listitem2 = document.createElement('li')
  const listitem3 = document.createElement('li')
  const listitem4 = document.createElement('li')
  const listitem5 = document.createElement('li')
  const listitem6 = document.createElement('li')

  panel.appendChild(listContainer)
  listContainer.appendChild(listitem1)
  listContainer.appendChild(listitem2)
  listContainer.appendChild(listitem3)
  listContainer.appendChild(listitem4)
  listContainer.appendChild(listitem5)
  listContainer.appendChild(listitem6)
  

  listitem1.textContent = obj[0]
  listitem2.textContent = obj[1]
  listitem3.textContent = obj[2]
  listitem4.textContent = obj[3]
  listitem5.textContent = obj[4]
  listitem6.textContent = obj[5]

  panel.classList.add('menu')

  const menuButton = document.querySelector('.menu-button')
  menuButton.addEventListener('click', () => {
    panel.classList.toggle('menu--open')
  })
  
  return panel
}

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

menuDiv.appendChild(menuMaker(menuItems))