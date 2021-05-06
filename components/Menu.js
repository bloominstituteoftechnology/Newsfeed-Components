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

function menuMaker(menuItems) {


const menucontainer = document.createElement("div")
const listContainer = document.createElement("ul")
const item1 = document.createElement("li")
const item2 = document.createElement("li")
const item3 = document.createElement("li")
const item4 = document.createElement("li")
const item5 = document.createElement("li")
const item6 = document.createElement("li")


menucontainer.appendChild(listContainer)
listContainer.appendChild(item1);
listContainer.appendChild(item2);
listContainer.appendChild(item3);
listContainer.appendChild(item4);
listContainer.appendChild(item5);
listContainer.appendChild(item6);

menucontainer.classList.add("menu");

item1 = menuItems[0]
item2 = menuItems[1]
item3 = menuItems[2]
item4 = menuItems[3]
item5 = menuItems[4]
item6 = menuItems[5]

menuButton = document.querySelector("img.menu-button")

menuButton.addEventListener("click", event) => {           ///why is event deprecated? 
  menuButton.event.classList.toggle("menu--open")         // not sure where/if to use event
}

appendHere = document.querySelector("div.header")

data.forEach((dataObj) => {
  const dataItem = menuMaker(dataObj);
  appendHere.appendChild(dataItem);
})

return menucontainer;


}