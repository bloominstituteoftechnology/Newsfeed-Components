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

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
let buttonImg=document.querySelector('.menu-button');
let menuComponents=function(array){
  //creating elements
  let menu=document.createElement('div');
  let list=document.createElement('ul');
  for(let i=0; i<array.length; i++){
    let listItem=document.createElement('li');
    list.appendChild(listItem);
    listItem.textContent=array[i];
  }
  //giving classnames to elements
  menu.classList.add('menu');

  //creating structure / appending elements
  menu.appendChild(list);
  buttonImg.addEventListener('click',function(event){
    menu.classList.toggle('menu--open');

    document.querySelector('.menu').style.display="absolute";
  });
  return menu;
}
let x=document.querySelector("body");
x.appendChild(menuComponents(menuItems));