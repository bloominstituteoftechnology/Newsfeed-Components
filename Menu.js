// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.
*/
function menuMaker(menuItems) {
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    const img = document.querySelector('img');
    div.appendChild(ul);
    div.classList.add('menu');
    menuItems.forEach((listItem) => {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = listItem;
    });
    img.classList.add('.menu-button');
    img.addEventListener('click', function(event) {
        div.classList.toggle('menu--open');
    });
    return div;
};
const header = document.querySelector('.header');
header.appendChild(menuMaker(menuItems));
/*
  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/