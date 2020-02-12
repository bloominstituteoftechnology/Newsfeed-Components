/* 
Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function menuItemCreator(menuItems){
  //container
  let menu = document.createElement("div");
  menu.classList.add("menu")
  //ul container
  let ul = document.createElement("ul");
  //put list container into main container
  menu.appendChild(ul);
  
  //make each item in array an li
  menuItems.forEach(item => {
    let list = document.createElement("li");
    list.textContent = item;
    ul.appendChild(list);
  })

  //Add hamburger button
  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu--open")
  })

  //menu is the container
  return menu;
  
}

//Select body (What we are inserting into)
const body = document.querySelector("body");
//Append object created from function
body.appendChild(menuItemCreator(menuItems));
