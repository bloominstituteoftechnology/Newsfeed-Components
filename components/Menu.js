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
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
    </div> 
  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
const menuMaker=(menuItems)=>{

const menu =document.createElement('div')
menu.classList.add('menu')

const ulitem=document.createElement('ul')

const listItemStudent=document.createElement('li')
  listItemStudent.textContent=menuItems[0]

const listItemFaculty=document.createElement('li')
 listItemFaculty.textContent=menuItems[1]

const listItemWhatsNew=document.createElement('li')
      listItemWhatsNew.textContent=menuItems[2]

const listItemTechTrends=document.createElement('li')
      listItemTechTrends.textContent=menuItems[3]

const listItemMusic=document.createElement('li')
      listItemMusic.textContent=menuItems[4]

const listItemLogOut=document.createElement('li')
      listItemLogOut.textContent=menuItems[5]


menu.appendChild(ulitem);
ulitem.appendChild(listItemStudent)
ulitem.appendChild(listItemFaculty);
ulitem.appendChild(listItemWhatsNew);
ulitem.appendChild(listItemTechTrends);
ulitem.appendChild(listItemMusic);
ulitem.appendChild(listItemLogOut)




const menubutton = document.querySelector('.menu-button')

menubutton.addEventListener('click', ()=>{
  menu.classList.toggle('menu--open')
})

return menu;
console.log(menu)
}



const menucontainer = document.querySelector('.header')

// menuItems.forEach(data=>{
//   menucontainer.appendChild(menuMaker(data.Student, data.Faculty, ))
// })

menucontainer.appendChild(menuMaker(menuItems))