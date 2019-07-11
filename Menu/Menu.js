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

  Pass the function an array as it's only argument.*/
function createMenu (arr) {
  const menu=document.createElement ('div');
  const ul=document.createElement ('ul');
  menu.classList.add('menu');
  menu.appendChild(ul);

 /* Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>*/
   arr.forEach(element => {
     let li=document.createElement('li');
     li.textContent=element;
     ul.appendChild(li);
   });
  /*
  Step 3: Using a DOM selector, select the menu button currently on the DOM.*/
  const menuButton=document.querySelector ('.menu-button');
  /*Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself*/
  menuButton.addEventListener('click', event=> {menu.classList.toggle('menu--open')});
 
  // Step 5: return the menu component.
return menu;
  }
  // Step 6: add the menu component to the DOM.
    document.querySelector('.header').appendChild(createMenu(menuItems));
