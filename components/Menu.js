// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
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

//Step 1

function menuMaker(menuItems) {
  let menu = document.createElement("div");
  menu.classList.add("menu");

  const unorderedList = document.createElement("ul");
  menu.appendChild(unorderedList);

  //Step 2

  menuItems.forEach((element) => {
    let menuItems = document.createElement("li");
    menu.appendChild(menuItems);
    menuItems.textContent = element;
  });

  //Step 3

  let menuButton = document.querySelector(".menu-button");
  //Step 4

  menuButton.addEventListener("click", (event) => {
    menu.classList.toggle("menu--open");
    menuButton.appendChild(menuItems);
    console.log("event fire");
  });

  //Step 5

  return menu;
}

//Step 6

const header = document.querySelector(".header");
const menu = menuMaker(menuItems);
header.appendChild(menuMaker(menuItems));
