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

    const menuItem1 = document.createElement("li");
    const menuItem2 = document.createElement("li");
    const menuItem3 = document.createElement("li");
    const menuItem4 = document.createElement("li");
    const menuItem5 = document.createElement("li");
    const menuItem6 = document.createElement("li");

    newMenu.appendChild(itemsList);

    newMenu.appendChild(menuItem1);
    newMenu.appendChild(menuItem2);
    newMenu.appendChild(menuItem3);
    newMenu.appendChild(menuItem4);
    newMenu.appendChild(menuItem5);
    newMenu.appendChild(menuItem6);

    newMenu.classList.add("menu", "menu-open");
    itemsList.classList.add("item-list", "menu-open");

    menuItem1.classList.add("menu-item");
    menuItem2.classList.add("menu-item");
    menuItem3.classList.add("menu-item");
    menuItem4.classList.add("menu-item");
    menuItem5.classList.add("menu-item");
    menuItem6.classList.add("menu-item");

    menuItem1.textContent = array[0];
    menuItem2.textContent = array[1];
    menuItem3.textContent = array[2];
    menuItem4.textContent = array[3];
    menuItem5.textContent = array[4];
    menuItem6.textContent = array[5];

    /*
      Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
      Add those items to the <ul>
    */


    // array.forEach(menuItem =>
    // {
    //     const li = document.createElement("li");
    //     newMenu.appendChild(li);
    //     newMenu.classList.add("menu");
    //     // itemsList.classList.add("menu-item");
    //     li.textContent = menuItem;
    // });

    // newMenu.appendChild(itemsList);


    /*
      Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
    */

    const menuButton = document.querySelector(".menu-button");



    /*
      Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
    */

    menuButton.addEventListener("click", () =>
    {
        menuButton.classList.toggle("menu-open");
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


const menuButton = document.querySelector(".menu-button");
menuButton.appendChild(menu);