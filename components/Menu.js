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
function menuMaker(array){
    const menu = document.createElement('div')
    menu.classList.add('menu')

    const list = document.createElement('ul')
    menu.appendChild(list)
    // declaring variables and making them equal to the div and ul tags on the html file that way i can edit them and add to them, the ul tag will hold a list (duh)

    const image = document.querySelector('img')
    image.classList.add('menu-button')
  // selecting the img tags on the html file and making them equal to a varaible i called image and then giving the variable (which is now attached to the html file) a class of menu-button
  array.forEach(element => {
    const listItem = document.createElement('li')
    listItem.textContent = element
    list.appendChild(listItem)
  })
  // looping over the array  and making every element inside the array into a li, and then making the text content ( which is what  will be visible on the page) for each element be equal to the element and then adding that to the ul from earlier
  image.addEventListener('click', event => {
    menu.classList.toggle('menu--open')
  })
  return menu
}
// adding an event listener to the img of a button so when pressed it will open and close the menu
let newMenu = menuMaker(menuItems)
document.querySelector('.header').appendChild(newMenu)
// creating a menu with the menu maker function that we just made, and then  appending it to whatever item on the page has a class of .header
