
const menu = document.querySelector('.menu');
const menuButton = document.querySelector(".menu-button");
const toggleMenu = () => {
  
  const classes = menu.classList;
  console.log(classes);
  classes.toggle('menu--open');
}

menuButton.addEventListener('click', toggleMenu);
