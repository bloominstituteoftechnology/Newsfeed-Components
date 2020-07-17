/**
 * /* This is the data we will be using, study it but don't change anything, yet.
 *
 * @format
 */

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
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element
  // for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 
    //'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle 
  the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and 
  append the returned menu to the header.
*/
// setting up function

function menuMaker(array) {
  //defining elements

  const newDiv = document.createElement("div");
  const newUl = document.createElement("ul");

  //adding menu class

  newDiv.classList.add("menu");

  //adding to DOM

  newDiv.appendChild(newUl);

  //itterating over array to create menu list

  array.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.textContent = element;
    newUl.appendChild(newLi);
  });

  // allowing hamburger menu to open and close

  document.querySelector(".menu-button").addEventListener("click", (event) => {
    newDiv.classList.toggle("menu--open");
  });

  return newDiv;
}

// adding to html

const myMenu = menuMaker(menuItems);
document.querySelector(".header").appendChild(myMenu);

console.log(menuMaker(menuItems));
