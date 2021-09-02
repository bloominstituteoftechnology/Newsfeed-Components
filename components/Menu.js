// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


  // Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as an <li>}
  //   </ul>
  // </div>

  // The 'menuMaker' takes an array of menu items as its only argument.

  function menuMaker(menuArr){

    const menuDiv = document.createElement('div')
    const menuUl = document.createElement('ul')
    

    menuDiv.appendChild(menuUl)
    
  
  // Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  // Add those items to the <ul>

    menuArr.forEach(item => {
      const menuLi = document.createElement('li')
      menuLi.textContent = item
      menuUl.appendChild(menuLi)
    });


  // Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

    const menuBtn = document.querySelector('.menu-button')

  // Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

    menuBtn.addEventListener('click', event =>{
      menuDiv.classList.toggle('menu-open')
    })

  // Step 5: Don't forget to return your div.menu.

    return menuDiv
  }
  // Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.

document.querySelector('.header').appendChild(menuMaker(menuItems));