/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function menuBar(){
  const newBar = document.createElement("div");
  const ulLine = document.createElement('ul');
  
  newBar.classList.add("menu")
  newBar.append(ulLine);
  
  const button = document.querySelector('.menu-button')

  button.addEventListener("click", ()=>{
    newBar.classList.toggle("menu--open")
  })

   menuItems.forEach(item=>{
    console.log(item)
    const list = document.createElement("li")
    list.textContent = item
    
    ulLine.appendChild(list)
    
  })



  

  return newBar;
}

const newHeader = document.querySelector('.header');

  menuItems.forEach(item =>{
    // console.log(item)
    newHeader.appendChild(menuBar(item))
  })

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  // Step 5: return the menu component.

  // Step 6: add the menu component to the DOM.
  

