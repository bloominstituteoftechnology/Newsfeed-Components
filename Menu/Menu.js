window.addEventListener('load', (e)=> {
//  This is the data we will be using, study it but don't change anything, yet. 

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

  // Step 1: Write a function that will create a menu component as seen below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>

  // Pass the function an array as it's only argument.
 
const header = document.querySelector('.header');

function createMenu(array){
  const menu = document.createElement('div');
  const ul = document.createElement('ul');
  menu.appendChild(ul);
  menu.classList.add('menu');
  for(i = 0; i < array.length; i ++){
    var li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = (`${array[i]}`);
  }

  let menuButton = document.querySelector('.menu-button');
  console.log(menuButton)
  menuButton.addEventListener('click', (e)=> {
    console.log('button clicked');
    menu.classList.toggle('menu--open');
  })

  console.log(header);
  return menu;
}
header.appendChild(createMenu(menuItems));

  // Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

  // Step 3: Using a DOM selector, select the menu button currently on the DOM.
  

  // Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  // Step 5: return the menu component.

  // Step 6: add the menu component to the DOM.
  
})


var tl = new TimeLineMax({paused: true, reversed:true});
  slide.to("body", .3, {backgroundColor: "blue"});

function menuIn() {
  tl.reversed() ? tl.play() :
  tl.reverse();
      }
