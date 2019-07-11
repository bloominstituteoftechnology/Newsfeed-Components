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


//component [...]
const menuButton = document.querySelector('.menu-button');
/*new update on header*/
const header = document.querySelector('.header')

//adding the menu component to the DOM
menuItems.forEach(add => {
  menuButton.appendChild(menuCreator(add.arr));
})

function menuCreator(arr) {
  const menuContainer = document.createElement('div')
  const menuC = document.createElement('div')
  const ulC = document.createElement('ul')
  /*Not sure if I need to make 'li' since the forEach will do so (right?) */

  //appending menu div & ul [...]
  menuContainer.appendChild(menuC);
  /*new update on header*/
  header.appendChild(menuC);
  menuC.appendChild(ulC);


  //class names [if applicable]
  menuC.classList.add('menu')
  /*not sure how to add the class '.menu ul li' since the forEach creates li (at least that's my understanding)*/

  //forEach that creates an <li> and appends to the <ul>
  menuItems.forEach(list => {
    const createItems = document.createElement('li')
    ulC.appendChild(createItems);
    /*not sure when I should add the class '.menu ul li' to the html, I tried 'menuulli' and 'li'*/
    createItems.classList.add('li')
  })

  //adding a click handler to menu button [...]
  menuButton.addEventListener('click', () => {
    //reference to menu class [maybe?] here
    menuRef = document.querySelector('.menu')
    menuRef.classList.toggle('menu--open')
  })




  return menuContainer;
}
