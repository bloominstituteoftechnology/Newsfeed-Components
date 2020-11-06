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

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/


function menuMaker (array){

  //create the div and apply the class
  const menuContainer = document.createElement('div')
  menuContainer.setAttribute('class','menu')

  const header = document.querySelector('.header')
  header.appendChild(menuContainer)

  //create the ul and append it to div

  const ulMenu = document.createElement('ul')
  menuContainer.appendChild(ulMenu)

  //links

  array.forEach(item => {

    const link = document.createElement('li')
  link.innerText = item
  ulMenu.appendChild(link)
    
  });

  console.log(document.querySelectorAll('li'))
  /* const link = document.createElement('li')
  link.innteText = arrayitem
  ulMenu.appendChild(link) */

  //

  const menuButton = document.querySelector('.header img')

  menuButton.addEventListener('click', ()=>{
    

    console.log('event fired')
  
    if (menuContainer.className ==='menu'){
      menuContainer.className = 'menu menu--open'
    }
    else if(menuContainer.className === 'menu menu--open'){
      menuContainer.className = 'menu'
    }

    
  })
  return menuContainer

}

menuMaker(menuItems)



