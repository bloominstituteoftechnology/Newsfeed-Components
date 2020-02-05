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


  // Step 2: Event Listener

// STEP 2 STARTS HERE//
 //CREATING EVENT LISTENER\\
 const button = document.querySelector(".menu-button");
 button.addEventListener("click", () => {
   menu.classList.toggle("menu--open");
 });


  // Step 3: return the menu component.
  
// STEP 3 STARTS HERE//
 //CREATING RETURN COMPONENT!\\
return menu

}

  // Step 4: add the menu component to the DOM.

  
// STEP 4 STARTS HERE//
  //CREATING MENU COMPONENT\\