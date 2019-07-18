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

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

class Menu {
  constructor(listArray) {
    this.listArray = listArray;
    this.menuButton = document.querySelector("img.menu-button");
    this.header = document.querySelector(".header");
    this.menu = document.createElement("div");
    this.menu.classList.add("menu");
    this.ul = document.createElement("ul");

    this.header.appendChild(this.menu);
    this.menu.appendChild(this.ul);
    this.list = this.listArray.forEach(listItem => {
      this.li = document.createElement("li");
      this.li.textContent = listItem;
      this.ul.appendChild(this.li);
    });

    this.menuButton.addEventListener("click", () => this.toggleOpen());
  }

  toggleOpen() {
    this.menu.classList.toggle("menu--open");
  }
}

const myMenu = new Menu(menuItems);
