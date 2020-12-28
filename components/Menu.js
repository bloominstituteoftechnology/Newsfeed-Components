

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

function menuMaker(items) {
  let div = document.createElement('div');
  div.classList.add('menu');
  let ul = document.createElement('ul');

  items.forEach(item => {
    let li = document.createElement('li');
    li.textContent = `${item}`
   ul.append(li)
  });

  let menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function(){
    div.classList.toggle('menu--open');
  });

  div.append(ul);
  return div;

}

  document.querySelector('.header').append(menuMaker(menuItems));


