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


const menuMaker = (menuItems)=>{

  //create the div, put the div inside the header
  const menuContainer= document.createElement("div")
  menuContainer.setAttribute('class','menu')

  /* const header = document.querySelector('.header')
  header.appendChild(menuContainer) */

  //create the list
  const ulMenu = document.createElement('ul')
  menuContainer.appendChild(ulMenu)

  //create list items

  const linkArray= []

for (let i=0; i<menuItems.length; i++){

  const link= document.createElement('li')
  link.textContent = menuItems[i]

  ulMenu.appendChild(link)
   linkArray.push(link)


}



console.log(linkArray)



linkArray.forEach(item => ulMenu.appendChild(item))




  //  
  


 

  // menu buttton

  const menuButton = document.querySelector(".menu-button")

  menuButton.addEventListener('click', ()=>{


    
    if(menuContainer.className = 'menu'){
      menuContainer.style.display ='block'
      return menuContainer
    }
    else if (menuContainer.className = 'menu menu--open'){
      menuContainer.style.display = 'none'
    }
    console.log("event fired")
  })

  return menuContainer

}

menuMaker(menuItems)

