/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

let menuButton = document.querySelector('.menu-button');

function menuCreator(menuItems) {

   let subMenu = document.createElement('div');
   let ulCreate = document.creatElement('ul');
   
   let li1 = document.createElement('li');
   let li2 = document.createElement('li');
   let li3 = document.createElement('li');
   let li4 = document.createElement('li');
   let li5 = document.createElement('li');
   let li6 = document.createElement('li');

   li1.textContent = menuItems[0];
   li2.textContent = menuItems[1];
   li3.textContent = menuItems[2];
   li4.textContent = menuItems[3];
   li5.textContent = menuItems[4];
   li6.textContent = menuItems[5];  

   menuButton.appendChild(subMenu);
   menuButton.appendChild(ulCreate);
   menuButton.appendChild(li1);
   menuButton.appendChild(li2);
   menuButton.appendChild(li3);
   menuButton.appendChild(li4);
   menuButton.appendChild(li5);
   menuButton.appendChild(li6);

   return menuButton;
}

menuButton.addEventListener('click', (element) => {

   element.classList.toggle('menu--open');

});

menuButton(menuItems);

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
