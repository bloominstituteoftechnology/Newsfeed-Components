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
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below: x

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

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Lambda School Newsfeed</title>
//     <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
//     <link rel="stylesheet" href="./styles/index.less">
//     <script src="./components/Menu.js" defer></script>
//     <script src="./components/Article.js" defer></script>
//   </head>
//   <body>
//     <div class="header">
//       <img class="menu-button" src="./assets/menu.png"/>
//       <h1>Lambda School Newsfeed</h1>
//     </div>
//     <div class="articles"></div>
//   </body>
// </html>

const header = document.querySelector('.header');

function menuMaker(data) {
  const outerDiv = document.createElement('div');
  outerDiv.classList.add('menu');
  const item = document.createElement('ul');
  outerDiv.appendChild(item);

  const button = document.querySelector('.menu-button');
  button.addEventListener('click', () => outerDiv.classList.toggle('menu--open'));

  data.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element;
    item.appendChild(li);
  });
  
  button.appendChild(outerDiv);
  return outerDiv;
};

header.appendChild(menuMaker(menuItems));
