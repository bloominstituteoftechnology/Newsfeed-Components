const header = document.querySelector('.header');
const navList = document.createElement('ul');
header.appendChild(navList);
// console.log(header);
function createNavItem(name) {
  const navItem = document.createElement('li');
  

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
  navImg.classList.toggle('menu--open');
})
