/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const linktoMenu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

const header = document.querySelector('.header');

function menuCreator(menuItems) {

  const div = document.createElement('div');
  const ulCreate = document.createElement('ul');

  div.classList.add('menu');
   
   const li1 = document.createElement('li');
   const li2 = document.createElement('li');
   const li3 = document.createElement('li');
   const li4 = document.createElement('li');
   const li5 = document.createElement('li');
   const li6 = document.createElement('li');

   li1.textContent = menuItems[0];
   li2.textContent = menuItems[1];
   li3.textContent = menuItems[2];
   li4.textContent = menuItems[3];
   li5.textContent = menuItems[4];
   li6.textContent = menuItems[5];  

   menuButton.appendChild(div);
   div.appendChild(ulCreate);
   ulCreate.appendChild(li1);
   ulCreate.appendChild(li2);
   ulCreate.appendChild(li3);
   ulCreate.appendChild(li4);
   ulCreate.appendChild(li5);
   ulCreate.appendChild(li6);


   menuButton.addEventListener('click', () => {
    div.classList.toggle('menu--open');
  
  });

   console.log(menuButton);

   return div;
}

header.appendChild(menuCreator(menuItems));

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
