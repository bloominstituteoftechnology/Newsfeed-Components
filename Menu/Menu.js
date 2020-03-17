/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
const menuComponent = (whatevs => { 
  const menu = document.createElement('div');
  const list = document.createElement('ul');
  
  
  menu.classList.add('menu');
  menu.appendChild(list);
 
  const button = document.querySelector('.menu-button');
    
    // event listeners
  button.addEventListener('click', () => { 
    menu.classList.toggle('menu--open');
  });
 
  whatevs.forEach(item =>{
  const theList = document.createElement('li');
  theList.textContent = item

  list.appendChild(theList);

    });
  return menu;
})

const newHeader = document.querySelector('.header');

newHeader.appendChild(menuComponent(menuItems));
