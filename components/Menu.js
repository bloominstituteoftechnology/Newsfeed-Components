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
  Step 1: Write a component called 'menuMaker' to create a menu like
   the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list 
  item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the
   menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button.
   When clicked it should toggle the class 'menu--open' 
   on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 
  'menuItems' array, and append the returned menu to the header.
*/
const menuMaker = (menu) =>{
/* 

<div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>
*/
// let theMenu = menu.map((i)=>{
//   let divM = document.createElement('div');
//   divM.classList.add('menu');
//   let ul = document.createElement('ul');
//   let li = document.createElement('li');
//   li.textContent = i;
//   ul.append(li);
//   divM.append( ul);
//   /// Class handler
//   divM.addEventListener('click',(e)=>{
//     e.target.classList.add('menu--open');
//   });
//   return divM;
// },true);

  // let divM = document.createElement('div');
  // divM.classList.add('menu');
  // let ul = document.createElement('ul');
  // let li = document.createElement('li');
  // li.textContent = menu[0];
  // ul.appendChild(li);
  // divM.appendChild(ul);
  // /// Class handler
  // // divM.addEventListener('click',(e)=>{
  // //   e.target.classList.add('menu--open');
  // // },true);

let ff = document.createElement('div');
ff.classList.add('menu--open');


return ff;

}

let header = document.querySelector('.header');

// header.appendChild(ap);
// header.forEach((e)=>{
//   let ap = menuMaker(menuItems);
//   e.append(ap);
// });

let ap = menuMaker(menuItems);

let ff = document.createElement('div');
let ul = document.createElement('ul');
menuItems.forEach((a) =>{
  
  let li = document.createElement('li');
li.textContent = a;
ul.appendChild(li);
})
// ff.classList.add('menu--open');
ff.classList.add('menu');
// ff.textContent='hifffff';
let img = document.querySelector('img.menu-button');
let h1 = document.querySelector('h1');
console.log('hi')
ff.appendChild(h1);
ff.appendChild(img);
// ff.append(h1.innerHTML);
// let hh = document.querySelector('.menu--open');
ff.addEventListener('click',(e)=>{
  ff.appendChild(ul);
  // ff.classList.add('menu--open');
  // let ffmenu = document.querySelector('.menu');
  // ffmenu.style.display = 'block';
ff.classList.toggle('menu--open');
// let menuD = document.querySelector('.menu');
// let fstyle = ff.getAttribute('style');
// ff.style.display = 'flex';
// menuD.style.display = 'block';
// ff.classList.toggle(fstyle);

},false);
console.log(ff);
  header.appendChild(ff);