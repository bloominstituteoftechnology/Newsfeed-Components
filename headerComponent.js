const menu = document.querySelector('.menu');
const navList = document.createElement('ul');
menu.appendChild(navList);

function createNavItem (name) {
  const navItem = document.createElement('li');
  navList.appendChild(navItem);
  navItem.textContent = name;
  return navItem;
}

const navItems = [
    'Students',
    'Faculty',
    'What\'s New',
    'Tech Trends',
    'Music',
    'Log Out',
]

const navImg = document.querySelector('.menu-button');
navImg.addEventListener('click', event => {
  menu.classList.toggle('menu--open');
})

navItems.forEach(item => {
  navList.appendChild(createNavItem(item))
})
console.log(navList);
