

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


function menuMaker(itemArr) {
   let menuDiv = document.createElement('div');
   let list = document.createElement('ul');
   
   menuDiv.appendChild(list);

   menuDiv.classList.add('menu')

   itemArr.forEach(item => {
     let newItem = document.createElement('li');
     newItem.textContent = item;
     list.appendChild(newItem);
   });

   document.querySelector('.menu-button').addEventListener("click", e => {
    menuDiv.classList.toggle('menu--open')
   })

   return menuDiv;
}

document.querySelector('.header').appendChild(menuMaker(menuItems))