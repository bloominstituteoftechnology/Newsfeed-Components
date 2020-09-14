// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  ['Students','https://www.google.com'],
  ['Faculty','https://www.google.com'],
  ["What's New",'https://www.twitter.com'],
  ['Tech Trends','https://www.github.com/Aaron-TheCreator'],
  ['Music','https://www.youtube.com'],
  ['Careers', 'https://www.linkedin.com'],
  ['Log Out','https://www.facebook.com']
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

const menuMaker = (array) => {
  // create elements
  const menu = document.createElement('div');
  const uList = document.createElement('ul');

  // add class to div
  menu.classList.add('menu');

  // for each
  array.forEach((element) => {
    // creates DOM li and a tag for each elements 
    const el = document.createElement('li');
    const aTag = document.createElement('a');

    // assigns a link href prop & style default
    aTag.href = element[1];
    aTag.style.textDecoration = "none";
    aTag.style.color = "inherit";

    // a link text content
    aTag.textContent = element[0];

    // appends appends a link to li, li to ul for each
    el.appendChild(aTag);
    uList.appendChild(el);
  });

  // add list to div
  menu.appendChild(uList);

  // menu button DOM
  const menuButton = document.querySelector('.menu-button');

  // event listener
  menuButton.addEventListener("click", () => {
    menu.classList.toggle('menu--open');
    
    // attempt to change button img src val onclick, curr error with menu-close src
    menuButton.src === './assets/menu.png' ? menuButton.src = './assets/menu-close.png':menuButton.src = './assets/menu.png';
    // if (menuButton.src === './assets/menu.png') {
    //   menuButton.src = './assets/menu-close.png';
    // } else {
    //   menuButton.src = './assets/menu.png';
    // };

  });

  // returns completed menu component
  return menu

};

const head = document.querySelector('.header');


head.appendChild(menuMaker(menuItems));
