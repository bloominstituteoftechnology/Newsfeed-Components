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
  The function takes an array as its only argument.
  
  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div> 
  */
 let menuH1 = document.querySelector('.header h1');
 let header = document.querySelector('.header');

  function menuBar (arr){
    const menuBtn = document.querySelector('.menu-button');
    const menuDiv = document.createElement('div');
    const list =menuDiv.appendChild(document.createElement('ul'));
    

  arr.forEach(element =>{
    const listItem = document.createElement('li');
    const item = document.createElement('a');
    item.setAttribute('href','#');
    item.textContent= element;
    item.style.textDecoration='none';
    item.style.fontSize='20px';
    item.style.color='white';
    list.style.padding='0', '0';
    listItem.appendChild(item);
    list.appendChild(listItem);
 });
  
  menuDiv.classList.add('menu');
  

menuBtn.addEventListener ('click', event => {
    event.stopPropagation();
    menuDiv.classList.toggle("menu--open");
  }, false);
  

  return menuDiv;
}

header.insertBefore(menuBar(menuItems), menuH1); 
/*
  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  
  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  */
