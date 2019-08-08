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

function MenuComponent(items){
  menu = document.createElement('div');
  menu.classList.add("menu");

let ul = document.createElement('ul');

let students = document.createElement('li');
students.textContent = menuItems[0];

let faculty = document.createElement('li');
faculty.textContent = menuItems[1];

let whatsnew = document.createElement('li');
whatsnew.textContent = menuItems[2];

let techtrends = document.createElement('li');
techtrends.textContent = menuItems[3];

let music = document.createElement('li');
music.textContent = menuItems[4];

let logout = document.createElement('li');
logout.textContent = menuItems[5];


ul.appendChild(students);
ul.appendChild(faculty);
ul.appendChild(whatsnew);
ul.appendChild(techtrends);
ul.appendChild(music);
ul.appendChild(logout);
menu.appendChild(ul);

return menu; 

};

let newMenuComponent = MenuComponent(menuItems);

let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', event => {
   newMenuComponent.classList.toggle('menu--open');
});

let headerDiv = document.querySelector(".header");
headerDiv.prepend(newMenuComponent);



