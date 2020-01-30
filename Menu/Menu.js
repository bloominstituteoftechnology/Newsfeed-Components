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

  The function takes an array as its only argument. */

// STEP 1 STARTS HERE//
  //CREATING FUNCTIONS HERE\\
function createMenu(data); {

  const menu = document.createElement("div");
  const list = document.createElement("ul");

data.forEach (array => {
  const items = document.createElement("li");
  items.textContent = array;
  list.appendChild(items);
});

  //CREATING STRUCTURE 
 menu.appendChild(list);

  //CREATING THE CLASS NAMES

  menu.classList.add("menu");
}



  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

  
// STEP 2 STARTS HERE//
  //CREATING FUNCTIONS HERE\\



  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  
// STEP 3 STARTS HERE//
  //CREATING FUNCTIONS HERE\\



  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  
// STEP 4 STARTS HERE//
  //CREATING FUNCTIONS HERE\\



  // Step 5: return the menu component.

  
// STEP 5 STARTS HERE//
  //CREATING FUNCTIONS HERE\\

  

  // Step 6: add the menu component to the DOM.

  
// STEP 6 STARTS HERE//
  //CREATING FUNCTIONS HERE\\
