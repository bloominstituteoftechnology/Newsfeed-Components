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
//write a function that creates the component and takes an array as an argument
function menuMaker(menuList) {
  //create the elements
  menuDiv = document.createElement('div');
  menuUl = document.createElement('ul');

  //add structure
  menuDiv.appendChild(menuUl);

  //add classes
  menuDiv.classList.add("menu");

  //loop over the array
  menuList.forEach(element => {
    //create an li every single time it loops
    const li = document.createElement('li');
    //set each li's textContent to each element
    li.textContent = element;
    //append the li's to the ul
    menuUl.appendChild(li);
  });

  const menuButton = document.querySelector('.menu-button');

  //event listener
  menuButton.addEventListener("click", () => {
    menuDiv.classList.toggle("menu--open");
    console.log('clicked')
  })

  return menuDiv;
}

window.addEventListener('load', () => {
  //select header
  const menu = document.querySelector('.header');
  //call this function while appending the return menu to the dom
  menu.appendChild(menuMaker(menuItems));

}) 