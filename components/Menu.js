// This is the data we will be using, study it but don't change anything, yet.

const menuItems = [1, 2, 3, 4, 5, 6];

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

function menuMaker(menuItems){
  const header = document.querySelector('.header');
  const div = document.createElement('div');
  const ulElement = document.createElement('ul');

  div.classList.add('menu');
  ulElement.classList.add('ul');

  header.appendChild(div);
  div.appendChild(ulElement);

  const menuButton = document.querySelector('.menu-button')

  menuButton.addEventListener('click', () =>{
    div.classList.toggle('menu--open')
  })

  return div;
}

menuItems.forEach(e=> {
  const menu = menuMaker(e);
  document.querySelector('.menu').append(menu);
})

function liMaker (i){
    const li = document.createElement('li')
    li.textContent = menuItems[i];
};

menuItems.forEach(e=>{
  const liElement = liMaker(e);
  document.querySelector('.ul').appendChild(liElement);
})