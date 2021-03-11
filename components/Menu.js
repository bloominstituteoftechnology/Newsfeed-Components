// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

 
//  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

function menuMaker(menuItems){

  let mainMenu = document.createElement('div')
  let mainList = document.createElement('ul')

  mainMenu.classList.add('menu');

  mainMenu.appendChild(mainList);
  
  // <div class="menu">
  //   <ul>
  //     {each menu item as an <li>}
  //   </ul>
  // </div>
  
  //  The 'menuMaker' takes an array of menu items as its only argument.
  
  // </div> Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  //  Add those items to the <ul>
  
  menuItems.forEach( () => {
    let List = document.createElement('li')
    List.textContent = menuItems;
    mainList.appendChild(List);
  })
  

  //  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').
  let menuButton = document.querySelector(".menu-button");
  //  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).
  menuButton.addEventListener('click', function(e){
    e.target.classList.toggle('menu--open')
  })
  //  Step 5: Don't forget to return your div.menu.
  
  return mainMenu;
}

//  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.

menuMaker(menuItems)

