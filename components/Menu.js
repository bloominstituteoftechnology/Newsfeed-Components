// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

function menuMaker(array)
{
    /*
      Step 1: Write a component called 'menuMaker' to create a menu like the markup below:
    
      <div class="menu">
        <ul>
          {each menu item as an <li>}
        </ul>
      </div>
    
      The 'menuMaker' takes an array of menu items as its only argument.
    */

    const newMenu = document.createElement("div");
    const itemsList = document.createElement("ul");

    /*
      Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
      Add those items to the <ul>
    */

    const menuItems = array.map(menuItem =>
    {
        const li = document.createElement("li");
        li.textContent = menuItem;
        return li;
    });

    newMenu.appendChild(itemsList);

    menuItems.forEach(menuItem =>
    {
        itemsList.appendChild(menuItem);
    });

    newMenu.classList.add("menu", "menu--open");
    itemsList.classList.add("menu-list");

    menuItems.forEach(menuItem =>
    {
        menuItem.classList.add("menu-item");
    });

    /*
      Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
    */

    const menuButton = document.querySelector(".menu-button");

    /*
      Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
    */

    menuButton.addEventListener("click", () =>
    {
        newMenu.classList.toggle("menu--open");
    });

    /*
      Step 5: Don't forget to return your div.menu.
    */

    return newMenu;
}

/*
  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

const menu = menuMaker(menuItems);

const header = document.querySelector(".header");
header.appendChild(menu);