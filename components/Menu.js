// Import the GSAP library
import { gsap } from "gsap";

// This is the data we will be using, study it but don't change anything, yet.

let menuItems = ["Students", "Faculty", "What's New", "Tech Trends", "Music", "Log Out"];

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
  // Declare the variable to create the element
  const newMenu = document.createElement("div");

  // Add some attributes into the new element
  newMenu.classList.add("menu");

  // Declare the `ul` tag for the menu items
  const menuListContainer = document.createElement("ul");

  // Add the menu items to the `ul` tag
  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.textContent = item;

    menuListContainer.appendChild(menuItem);
  });

  // Add the `ul` tag with all menu items into the menu container
  newMenu.appendChild(menuListContainer);

  // Create an Event Listener for the menu button
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", () => {
    newMenu.classList.toggle("menu--open");

    if (newMenu.classList.contains("menu--open")) {
      gsap.to(".menu", { opacity: 1, x: 0, duration: 1.5 });
    } else {
      gsap.to(".menu", { opacity: 0, x: -350, duration: 1.5 });
    }
  });

  // Return the new menu
  return newMenu;
}

// Add the new menu to the header
const header = document.querySelector(".header");
const mainMenu = menuMaker(menuItems);

header.appendChild(mainMenu);

console.log("Menu items to insert", mainMenu);