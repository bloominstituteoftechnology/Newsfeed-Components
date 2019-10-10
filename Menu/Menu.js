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

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// dropDownMenu = function (array){
// divMenu = document.createElement("div")
// ul = document.createElement("ul")

// divMenu.appendChild(ul)

// divMenu.classList.add("menu")

 
// array.forEach(element => {
//   listItem = document.createElement("li");
//   listItem.textContent = element;
//   ul.appendChild(listItem)
//   return listItem
// });


// menuButton = document.querySelector(".menu-button")

// menuButton.addEventListener("click", (e)=>{
//    divMenu.classList.toggle("menu--open")
// })
// console.log(divMenu)
// return divMenu
// }


// menuButton2 = document.querySelector(".menu-button")
// menuButton2.appendChild(dropDownMenu(menuItems))


dropDown = function (array){
  let menu = document.createElement("div");
  let listHolder = document.createElement("ul");

  menu.classList.add("menu");
menu.appendChild(listHolder)
  array.forEach(element => {
    let listItem = document.createElement("li")
    listItem.textContent = element;
    listHolder.appendChild(listItem)
    
  });

 menuButton = document.querySelector(".menu-button")
 menuButton.addEventListener("click",(e)=>{
   menu.classList.toggle("menu--open")
 });

 return menu;
}
console.log(dropDown(menuItems))
menuDrop = document.querySelector(".menu-button")
menuDrop.appendChild(dropDown(menuItems));

  console.log(menuDrop)