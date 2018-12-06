const toggleMenu = () => {
  menu.classList.toggle('menu--open');
};

const menu = 
document.querySelector('.menu');

const menuButton = 
document.querySelector('.menu-button');

function getRandomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
};

menuButton.addEventListener('click', function(e) {
  e.target = toggleMenu();
  e.target.style.backgroundColor = getRandomColor();
  e.target.style.borderColor = getRandomColor();
});