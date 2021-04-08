
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
/*
Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
Add those items to the <ul> */


function menuMaker(menuArray){
   
const menuItem = document.createElement("div")  // creating a new element 
const list = document.createElement("ul");    // creating a 2nd element
menutItems.appendChild(list)     // This is going to be append to the DOM => the UL
menuItem.classList.add("menu")    // Adding  a new new class list
                   // creating a menu

menuItem.addEventListener("click", (event) =>{   // adding a event listner to the menu button
  menuItems.classList.toggle("menu-open") // when click it should toggle
  });


  menuItems.forEach(item =>{  // for every array that the parameter, appending a newlist
    const listItem = document.createElement("li");
    newLists.textContent = item
    list.appendChild(newLists)

  })
  
  
  return menuItem;
  

}


menu();


//create a menu using the items array and append return

function menuMaker(menuObj){
const menu1 = document.createElement("div");
const menu2 = document.createElement("li");
const menu3 = document.createElement("li");
const menu4 = document.createElement("li");
const menu5 = document.createElement("li");
const menu6 = document.createElement("li");
const menu7 = document.createElement("li");

}

menu.appendChild(menu1)
menu.appendChild(menu2)
menu.appendChild(menu3)
menu.appendChild(menu4)
menu.appendChild(menu5)
menu.appendChild(menu6)
menu.appendChild(menu7)

// adding a class list menu
menu.classList.add("menu")


// we have a list of array from menuItems

 menu1.textContent = menuObj[0];
 menu2.textContent = menuObj[1];
 menu3.textContent = menuObj[2];
menu4.textContent = menuObj[3];
menu5.textContent = menuObj[4];
menu6.textContent = menuObj[5];


let container = document.querySelector(".header");




/*
Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

*/


              // we are giving the menuMaker function a li object that can be use in html










/*

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

